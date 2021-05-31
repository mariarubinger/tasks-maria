import React, { useState, useEffect } from 'react';
import * as FirestoreService from '../../services/firestore';
import './styles.css';

function ProjectList({setNameProject,setTaskList,setProjectId}) {
    const [projectList, setProjectList] = useState([]); 
    const [error, setError] = useState();
 
    // Use an effect to authenticate and load the grocery list from the database
    useEffect(() => {
      FirestoreService.authenticateAnonymously().then(userCredential => {           
      FirestoreService.getProjectList()
         .then(projects => {                      
           let arrayProjects = [];
           if (projects) {             
             setError(null);             
             projects.forEach((doc) => {        
               arrayProjects.push(<li key={doc.id}  onClick={(e) => selectProject(e,doc.data().name,doc.id)} id={doc.id}>{doc.data().name}</li>);
            });            
            setProjectList(arrayProjects)
 
           } else {
             setError('Lista de projetos não encontrada');             
           }
         })
         .catch(() => setError('Falha ao buscar lista de projetos')); 
         
         function selectProject(e, name, id){
          setNameProject(name);   
          FirestoreService.getTasksByProject(id)
                .then(tasks => {                      
                  let arrayTasks = [];
                  if (tasks) {             
                    setError(null);             
                    tasks.forEach((doc) => {      
                     arrayTasks.push(<li className="task" key={doc.id}>{doc.data().name}</li>);
                   });           
                   setTaskList(arrayTasks)
                   setProjectId(id)
                  
                  } else {
                    setError('Lista de tarefas não encontrada');             
                  }
                })
                .catch(() => setError('Falha ao buscar lista de tarefas'));  
            }  
   })
   .catch((e) => {setError('Falha na autenticação');console.log(e)});
 },[]);

    return (
        <div>     
            <div className="projectList"><ul>{projectList}</ul></div>
        </div>
    );
}
 
export default ProjectList;
