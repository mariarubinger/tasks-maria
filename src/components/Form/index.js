import { useState } from "react";
import './styles.css';
import * as FirestoreService from '../../services/firestore';

//campo para preencher o Título do novo quadro (input, button...)
function Form() {
    const [newTaskBoard, setNewTaskBoard] = useState(''); //quadros de tarefas
    
    function handleNewTaskBoard(e) {
        let input = e.target.value;
        setNewTaskBoard(input); //atualiza o estado taskBoard através de setTaskBoard
    }

    //função que adiciona o novo quadro na lista de quadros de tarefas
    function addBoard(e) {
        if(!newTaskBoard) return; //se o input estiver vazio, não adiciona em branco
        e.preventDefault(); //desabilita o refresh ao clicar no button
        FirestoreService.createProject(newTaskBoard)
        
        /* setBoardsList(boardsList => [...boardsList, newTaskBoard]); */ //pega todos os quadros existentes e adiciona o novo quadro de tarefas 
        setNewTaskBoard(''); //limpa o input depois de adicionar novo quadro
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
                    onChange={handleNewTaskBoard}
                    value={newTaskBoard}
                    />
                <button
                    type="submit"
                    className="button-form"
                    onClick={addBoard}>
                    ADICIONAR
                </button>
             </div>
        </form>
        </div>
    )
}

export default Form;
