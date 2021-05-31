import { useState } from "react";
import './styles.css';
import * as FirestoreService from '../../services/firestore';

function Form({setReloadProject}) {
    const [newProject, setNewProject] = useState(''); 
    
    function handleNewProject(e) {
        let input = e.target.value;
        setNewProject(input);
    }

    function addProject(e) {
        if(!newProject) return; 
        e.preventDefault(); 
        FirestoreService.createProject(newProject)

        var today = new Date();
        var milliseconds = today.getMilliseconds();
        setReloadProject(milliseconds);       
       
        setNewProject(''); 
    }

    return (
        <div className="container-form">
            <form>
                <h3>Meus projetos</h3>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Novo projeto"
                        className="input-form"
                        onChange={handleNewProject}
                        value={newProject}
                        />
                    <button
                        type="submit"
                        className="button-form"
                        onClick={addProject}>
                        ADICIONAR
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;
