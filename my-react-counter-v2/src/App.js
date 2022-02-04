import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState([0]);

  //ma fonction(handlePlusClick) que j'appelle? à laquelle je fais reference? avec onClick
  const handlePlusClick = () => {
    //copie de counter
    const newArr = [...counter];

    //modifier la copie
    newArr.push(counter + 1);
    //MAJ l'etat de la copie ? avec la copie ?
    setCounter(newArr);
    console.log("counter ====>", counter);
    console.log("newArr ====>", newArr);
  };
  const handleMinusClick = () => {
    setCounter(counter - 1);
  };
  const handleResetBtn = () => {
    setCounter(0);
  };

  //  key={index} on verra plus tard

  return (
    <div className="myCounterOne">
      <div>
        {counter.map((elem, index) => {
          return <p> {elem} </p>;
        })}{" "}
      </div>
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
