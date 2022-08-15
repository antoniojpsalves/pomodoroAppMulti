import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';


interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

// Props é passada como param da func, e pode ser desestruturada de uma vez
//                             Props:          { tarefa: string, tempo: string}
export default function Item({
    tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id, 
    selecionaTarefa
}: Props) {

    // console.log('item atual', {tarefa, tempo, selecionado, completado, id} );

    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado: ''}`}
        onClick={() => !completado && selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
            {completado && <span className={style.concluido} aria-label="Tarefa completada"></span>}
        </li>
    );
}