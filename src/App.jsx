import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Container, ToDoList, Input, Button, ListItem, Trash, Check, H3 } from "./styles.js";

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('');

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function cliqueiNoBotao() {
    const trimmedTask = inputTask.trim();
    if (trimmedTask) {
      setList([...list, { id: uuidv4(), task: trimmedTask, finished: false }]);
      setInputTask('');
      document.getElementById("taskInput").value = ''; // Limpa o campo de entrada
    }
  }  

  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function excluirTarefa(id) {

    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input id="taskInput" onChange={inputMudou} placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adcionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => excluirTarefa(item.id)} />
                </ListItem>
              ))
            ) : (
              <H3>Não há itens na lista...</H3>
            )
          }
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
