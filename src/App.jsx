import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

import { Container, ToDoList, Input, Button, ListItem } from "./styles.js";

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('');

  function inputMudou(event) {
    setInputTask(event.target.value);
    console.log(inputTask);
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuidv4(), task: inputTask, finished: false }]);
  }

  function finalizarTarefa(id){
    
    const newList = list.map( item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function excluirTarefa(id){

    const newList = list.filter( item => item.id !== id )

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adcionar</Button>

        <ul>
          {list.map((item) => (
            <ListItem isFinished={item.finished} key={item.id}>
              <FcCheckmark onClick={() => finalizarTarefa(item.id)}/>
              <li>{item.task}</li>
              <FcEmptyTrash onClick={() => excluirTarefa(item.id)}/>
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
