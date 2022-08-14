import { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import StopWatch from '../components/stopwatch';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {

  //useState é um hook do react que necessita do estado inicial, e retorna o item e uma func
  const [tarefas, setTarefas] = useState<ITarefa[]>([]); //pode ser um array de Itarefa ou vazio

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas}/>
      <StopWatch />
    </div>
  );
}

export default App;
