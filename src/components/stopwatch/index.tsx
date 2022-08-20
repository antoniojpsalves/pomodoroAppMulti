import Button from "../button";
import Watch from "./watch";
import style from "./Stopwatch.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined,
    contando: boolean,
    setContando: (estado: boolean) => void,
    finalizarTarefa: () => void
}

export default function StopWatch({ selecionado , contando, setContando , finalizarTarefa}: Props) {

    // console.log('Tempo', tempoParaSegundos('01:01:01'));

    const [tempo, setTempo] = useState<number>();

    //ESTUDAR MT USE EFFECT - recebe uma função, e um array de dependências
    useEffect(()=> {
        if(selecionado?.tempo)
            setTempo(tempoParaSegundos(selecionado.tempo));
    }, [selecionado]);


    //Excecutando a contagem regressiva recursivamente
    function regressiva(contador: number = 0) {

        setContando(true);
        
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            setContando(false);
            finalizarTarefa();//se o contador não for maior que 0 finaliza a tarefa.
        }, 1000);
    }

    return (
        <div className={style.stopWatch}>
            <p className={style.title}> Escolha um dos cards e inicie o cronômetro </p>
            <div className={style.watchWrapper}>
                <Watch tempo={tempo}/>
            </div>
            <Button
             onClick={() => !contando && regressiva(tempo)}
             text="Iniciar"/>
        </div>
    );
}