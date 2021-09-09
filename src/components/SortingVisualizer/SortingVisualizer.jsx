import React, { useState } from "react";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  //function to generate random numbers between two given variables
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [array] = useState([]);

  for (let i = 0; i < 200; i++) {
    array.push(randomIntFromInterval(5, 500));
  }

  console.log(array);

  return (
    <div className="main-container">
      {array.map((val, key) => (
        <div className="bars" key={key} style={{ height: `${val}px` }}></div>
      ))}
    </div>
  );
}

export default SortingVisualizer;
