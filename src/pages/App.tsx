import { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import StopWatch from '../components/stopwatch';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {

  //useState é um hook do react que necessita do estado inicial, e retorna o item e uma func
  const [tarefas, setTarefas] = useState<ITarefa[]>([]); //pode ser um array de Itarefa ou vazio

  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);

    //iterando sobre cada tarefa para descobrir qual está selecionada pelo id
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List
       tarefas={tarefas}
       selecionaTarefa={selecionaTarefa}
      />
      <StopWatch selecionado={selecionado}/>
    </div>
  );
}

export default App;
