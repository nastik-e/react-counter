import React from "react";
import "./App.scss";

function App() {
  const [state, setState] = React.useState(0);
  const statePlus = () => {
    setState(state + 1);
  };
  const stateMinus = () => {
    setState(state - 1);
  };

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
        <button onClick={stateMinus} className="minus async">
          Minus in 1 sec
        </button>
        <button onClick={statePlus} className="plus async">
          Plus in 1 sec
        </button>
      </div>
    </div>
  );
}

export default App;
