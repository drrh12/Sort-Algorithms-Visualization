import React, { useState } from "react";

function SortingVisualizer() {
  //function to generate random numbers between two given variables
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [array] = useState([]);

  for (let i = 0; i < 100; i++) {
    array.push(randomIntFromInterval(5, 1000));
  }

  console.log(array);

  return (
    <>
      {array.map((val, key) => (
        <div className="main" key={key}>
          {val}
        </div>
      ))}
    </>
  );
}

export default SortingVisualizer;
