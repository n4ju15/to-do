import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { Container } from './styles.js'

function App() {
  const [list, setList] = useState([{}])
  const [inputTask, setInputTask] = useState('')

  function inputMudou(event) {
    setInputTask(event.target.value)
    console.log(task)
  }

  function cliqueiNoBotao() {
    setList([ ...list, { id: uuidv4(), task: inputTask }])
  }

  return (
    <Container>
      <input onChange={inputMudou} placeholder="O que tenho para fazer..." />
      <button onClick={cliqueiNoBotao}>Adcionar</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
