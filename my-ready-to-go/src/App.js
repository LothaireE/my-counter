import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  console.log("chevron 1 enclenché", switch1);
  console.log("chevron 2 enclenché", switch2);
  console.log("chevron 3 enclenché", switch3);

  return (
    <div>
      <h1>Push it to the limit</h1>
      <div>
        <Button transmission={setSwitch1} />

        <Button transmission={setSwitch2} />

        <Button transmission={setSwitch3} />
      </div>

      {switch1 && switch2 && switch3 && <h3>beleeeeeza</h3>}
    </div>
  );
}

export default App;
