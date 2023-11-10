import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [list, setList] = useState([{}])

  function inputMudou(event) {
    setList([{ id: uuidv4(), task: event.target.value }])
  }

  function cliqueiNoBotao() {
    console.log("Cliquei no botão!");
  }

  return (
    <div>
      <input onChange={inputMudou} placeholder="O que tenho para fazer..." />
      <button onClick={cliqueiNoBotao}>Adcionar</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
