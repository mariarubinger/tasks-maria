import React, { useState } from 'react';
import Form from "./components/Form";
import ProjectList from "./components/ProjectList";
import Board from "./components/Board";
import './styles/global.css';
import './App.css';

function App() {
    const [projectId, setProjectId] = useState(''); 
    const [nameProject, setNameProject] = useState('Selecione um projeto');
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState('');
    
    return (
        <div>
            <div className="header">
              {nameProject}
            </div>
            <div className="flex">
                <div className="sidebar">
                    <Form />
                    <ProjectList taskList={taskList} setProjectId={setProjectId} setTaskList={setTaskList} setNameProject={setNameProject} /> 
                </div>
                    <Board taskList={taskList} projectId={projectId} newTask={newTask} setNewTask={setNewTask} />
            </div>
            
        </div>
  );
}

export default App;
