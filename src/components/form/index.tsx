import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../button";
import style from  './Form.module.scss';



export default function Form ({
    setTarefas} : {setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
    }) {

    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00');

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // console.log('Estado atual', {tarefa: tarefa, tempo: tempo});

        //Capturando a info como param, para não ter que tipar novamente
        setTarefas(tarefasAntigas => [...tarefasAntigas, {tarefa, tempo}]);
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={ event => {
                        setTarefa(event.target.value);
                    }}
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    value = {tempo}
                    max="01:30:00"
                    required
                    onChange={ event => {
                        setTempo(event.target.value);
                    }}
                />
            </div>
            <Button 
                type = 'submit'
                text = 'Adicionar'
            />
        </form>
    );
}