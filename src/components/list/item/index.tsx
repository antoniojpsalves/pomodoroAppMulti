import style from '../List.module.scss';

// Props é passada como param da func, e pode ser desestruturada de uma vez
//                             Props:          { tarefa: string, tempo: string}
export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}) {
    return(
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    );
}