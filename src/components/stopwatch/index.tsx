import Button from "../button";
import Watch from "./watch";
import style from "./Stopwatch.module.scss";

export default function StopWatch() {
    return (
        <div className={style.stopWatch}>
            <p className={style.title}> Escolha um dos cards e inicie o cronômetro </p>
            <div className={style.watchWrapper}>
                <Watch />
            </div>
            <Button text="Iniciar"/>
        </div>
    );
}