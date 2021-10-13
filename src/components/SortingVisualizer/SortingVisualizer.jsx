import React, { useState } from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from "../../Algorithms/MergeSort";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 80;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

function SortingVisualizer() {
  var [array, setArray] = useState([]);

  //function to generate random numbers between two given variables
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function resetArray() {
    setArray(() => {
      let array = [];
      for (let i = 0; i < 150; i++) {
        array.push(randomIntFromInterval(5, 500));
      }
      return array;
    });
  }

  function mergeSort() {
    const animations = getMergeSortAnimations(array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  console.log(array);

  return (
    <div className="array-container">
      <div>
        <div className="buttons-div">
          <button className="button" onClick={resetArray}>
            Generate new array
          </button>
          <button className="button" onClick={mergeSort}>
            Merge Sort
          </button>
        </div>
      </div>
      <div className="array-bar-container">
        {array.map((val, key) => (
          <div
            className="array-bar"
            key={key}
            style={{ height: `${val}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SortingVisualizer;
