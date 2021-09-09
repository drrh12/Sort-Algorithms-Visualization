import React, { useState } from "react";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  var [array, setArray] = useState([700, 850, 900]);

  //function to generate random numbers between two given variables
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function resetArray() {
    setArray(() => {
      let array = [];
      for (let i = 0; i < 200; i++) {
        array.push(randomIntFromInterval(5, 500));
      }
      return array;
    });
  }

  console.log(array);

  return (
    <div className="main-container">
      <div>
        <ul>
          <li>
            <a href="#home">Merge Sort</a>
          </li>
          <li>
            <a href="#news">Quick Sort</a>
          </li>
          <li>
            <a href="#contact">Bubble Sort</a>
          </li>
          <button onClick={resetArray}>generate</button>
        </ul>
      </div>
      {array.map((val, key) => (
        <div className="bars" key={key} style={{ height: `${val}px` }}></div>
      ))}
    </div>
  );
}

export default SortingVisualizer;
