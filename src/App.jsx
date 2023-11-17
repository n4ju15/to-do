import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

import { Container, ToDoList, Input, Button, ListItem } from "./styles.js";

function App() {
  const [list, setList] = useState([{}]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
    console.log(task);
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuidv4(), task: inputTask }]);
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adcionar</Button>

        <ul>
          {list.map((item) => (
            <ListItem>
              <FcCheckmark />
              <li key={item.id}>{item.task}</li>
              <FcEmptyTrash />
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
