import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  //ma fonction(handlePlusClick) que j'appelle? à laquelle je fais reference? avec onClick
  const handlePlusClick = () => {
    setCounter(counter + 1);
  };
  const handleMinusClick = () => {
    setCounter(counter - 1);
  };
  const handleResetBtn = () => {
    setCounter(0);
  };

  return (
    <div className="myCounter">
      <p> {counter} </p>
      <div className="myPlusBtn">
        <button onClick={handlePlusClick}>+</button>
      </div>
      <div className="myMinusBtn">
        <button onClick={handleMinusClick}>-</button>
      </div>
      <div className="myResetBtn">
        <button onClick={handleResetBtn}>Reset</button>
      </div>
    </div>
  );
}

export default App;
