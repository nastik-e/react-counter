import React, {useState } from "react";
import "./App.scss";

function App() {
  const [state, setState] = useState(0);

  const statePlus = () => {
    setState((prev) => prev + 1);
  };
  const stateMinus = () => {
    setState((prev) => prev - 1);
  };
const delayedStateMinus = () => {
  setTimeout(() => {
    stateMinus()
  }, 1000);
}
const delayedStatePlus = () => {
  setTimeout(() => {
    statePlus()
  }, 1000);
}
  return (
    <div className="App">
      <div className="Counter">
        <h2 className="name">Counter</h2>
        <h1 className="number">{state}</h1>
        <button onClick={stateMinus} className="minus">
          - Minus
        </button>

        <button onClick={statePlus} className="plus">
          Plus +
        </button>
        <button onClick={delayedStateMinus} className="minus async">
          Minus in 1 sec
        </button>
        <button onClick={delayedStatePlus} className="plus async">
          Plus in 1 sec
        </button>
      </div>
    </div>
  );
}
export default App;
