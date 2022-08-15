import style from './Watch.module.scss';

interface Props {
    tempo: number | undefined
}

export default function Watch({tempo = 0}: Props) {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;


    //Convertendo minutos para string para poder recuperar pelo destructuring
    //Necessário downlevelInteration no tsconfig.json
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');

    //Utilizando padStart para poder adicionar um 0 no inicio em caso de 1 dígito apenas
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

    
    return(
        <>
            <span className={style.watchNumber}>{minutoDezena}</span>
            <span className={style.watchNumber}>{minutoUnidade}</span>
            <span className={style.watchDiv}>:</span>
            <span className={style.watchNumber}>{segundoDezena}</span>
            <span className={style.watchNumber}>{segundoUnidade}</span>
        </>
    );
}