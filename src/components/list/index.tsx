import { ITarefa } from '../../types/tarefa';
import Item from './item';
import style from './List.module.scss';

interface Props {
    tarefas: ITarefa[], 
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function List({tarefas, selecionaTarefa} : Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        // tarefa ={item.tarefa}
                        // tempo = {item.tempo} 
                        {...item} //Passando via spread as chaves -> valores do item
                    />
                ))}
            </ul>
        </aside>
    );
}