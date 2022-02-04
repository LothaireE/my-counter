import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState([0]);
  const [addCounter, setAddCounter] = useState(0);

  const handleAddCounterBtn = () => {
    setAddCounter(addCounter + 1);
    console.log(addCounter);
  };

  //ma fonction(handlePlusClick) que j'appelle? à laquelle je fais reference? avec onClick
  const handlePlusClick = () => {
    //copie de counter
    const newArr = [...counter];

    //modifier la copie
    newArr.push(counter + 1);

    //MAJ l'etat de la copie ? avec la copie ?
    setCounter(newArr);

    console.log("newArr ====>", counter);
  };
  const handleMinusClick = () => {
    setCounter(counter - 1);
  };
  const handleResetBtn = () => {
    setCounter(0);
  };

  //  key={index} on verra plus tard

  return (
    <div className="myContainer">
      {addCounter < 2 && (
        <button className="myAddCounterBtn" onClick={handleAddCounterBtn}>
          Add Counter
        </button>
      )}

      <div className="myCounters">
        <div className="Counter">
          <div>
            {counter.map((elem, index) => {
              console.log("elem ===>", elem);
              return <p key={index}> {elem} </p>;
            })}
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
        {addCounter >= 1 && (
          <div className="myCounters">
            <div className="Counter">
              <div>
                {counter.map((elem, index) => {
                  console.log("elem ===>", elem);
                  return <p key={index}> {elem} </p>;
                })}
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
          </div>
        )}
        {addCounter >= 2 && (
          <div className="myCounters">
            <div className="Counter">
              <div>
                {counter.map((elem, index) => {
                  console.log("elem ===>", elem);
                  return <p key={index}> {elem} </p>;
                })}
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
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
