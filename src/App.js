import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <span>Counter : {counter}</span>

      {counter < 10 && (
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      )}

      {counter > 0 && (
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
      )}

      <button
        onClick={() => {
          setCounter(counter * 0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
