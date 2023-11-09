import { v4 as uuidv4 } from 'uuid';
uuidv4();


function App() {
  const list = [{}];

  //"Ir ao mercado", "Estudaar React"

  function inputMudou(event) {
    console.log(event.target.value);
  }

  function cliqueiNoBotao() {
    console.log("Cliquei no botão!");
  }

  return (
    <div>
      <input onChange={inputMudou} placeholder="O que tenho para fazer..." />
      <button onClick={cliqueiNoBotao}>Adcionar</button>

      <ul>
        {
          list.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
