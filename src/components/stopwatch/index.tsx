import Button from "../button";
import Watch from "./watch";
import style from "./Stopwatch.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined;
}

export default function StopWatch({ selecionado }: Props) {

    // console.log('Tempo', tempoParaSegundos('01:01:01'));

    const [tempo, setTempo] = useState<number>();

    //ESTUDAR MT USE EFFECT - recebe uma função, e um array de dependências
    useEffect(()=> {
        if(selecionado?.tempo)
            setTempo(tempoParaSegundos(selecionado.tempo));
    }, [selecionado]);

    return (
        <div className={style.stopWatch}>
            <p className={style.title}> Escolha um dos cards e inicie o cronômetro </p>
            {/* Tempo: {tempo} */}
            <div className={style.watchWrapper}>
                <Watch />
            </div>
            <Button text="Iniciar"/>
        </div>
    );
}