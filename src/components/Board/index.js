import React, { useState } from 'react';
import * as FirestoreService from '../../services/firestore';
import './styles.css';

function Board({taskList,projectId,newTask,setNewTask,setTaskList}) {
    const [error, setError] = useState();
 
    function handleNewTask(e) {
        let input = e.target.value;
        setNewTask(input);
    } 

    function addTask(e){    
        if(!newTask) return;
        e.preventDefault();   
        FirestoreService.createTask(newTask, projectId);

        FirestoreService.getTasksByProject(projectId)
        .then(tasks => {                      
            let arrayTasks = [];
            if (tasks) {             
            setError(null);             
            tasks.forEach((doc) => {      
                arrayTasks.push(<li className="task" key={doc.id}>{doc.data().name}</li>);
            });           
            setTaskList(arrayTasks)                                     
            } else {
            setError('Lista de tarefas não encontrada');             
            }
        })
        .catch(() => setError('Falha ao buscar lista de tarefas'));  

        setNewTask(''); 
    }

    return(
        <div className="containerTasks">            
            <div className="status">
                <h4>TODO</h4>
                {taskList}
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Adicionar nova tarefa"
                        className="input-form-task"
                        onChange={handleNewTask}
                        value={newTask}
                        />
                    <button
                        type="submit"
                        className="button-form-task"
                        onClick={addTask}>
                        +
                    </button>
                </div>
            </div>
            <div className="status">
                <h4>DOING</h4>
            </div>
            <div className="status">
                <h4>DONE</h4>
            </div>
        </div>
    )
}
 
export default Board;
