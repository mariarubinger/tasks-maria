import React, { useState } from 'react';
import * as FirestoreService from '../../services/firestore';
import './styles.css';

function Board({taskList,projectId,newTask, setNewTask}) {

function handleNewTask(e) {
    let input = e.target.value;
    setNewTask(input); //atualiza o estado taskBoard através de setTaskBoard
}

function addTask(e){   
    if(!newTask) return; //se o input estiver vazio, não adiciona em branco
    e.preventDefault(); //desabilita o refresh ao clicar no button   
    let a = FirestoreService.createTask(newTask, projectId);
    setNewTask(''); //limpa o input depois de adicionar novo quadro
}

    return(
        <div className="containerTasks">            
            <div className="status">
                <h4>TODO</h4>
                 {taskList}
                <div className="flex">
                <input
                    type="text"
                    placeholder="Nova Tarefa"
                    className="input-form"
                    onChange={handleNewTask}
                    value={newTask}
                    />
                <button
                    type="submit"
                    className="button-form"
                    onClick={addTask}>
                    ADICIONAR
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
