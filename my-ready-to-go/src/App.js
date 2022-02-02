import "./App.css";
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  // const [switch2, setSwitch2] = useState(false);
  // const [switch3, setSwitch3] = useState(false);
  console.log(switch1);

  <span>switch {switch1} </span>;

  return (
    <div>
      <h1>Push it to the limit</h1>

      {/* <Button /> */}

      <button
        onClick={() => {
          setSwitch1(true);
        }}
      >
        ON
      </button>
      <button
        onClick={() => {
          setSwitch1(false);
        }}
      >
        OFF
      </button>
    </div>
  );
}

export default App;
