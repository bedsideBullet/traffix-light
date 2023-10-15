import { useState } from "react";
const lights = ["red", "green", "yellow"];

export const FunctionalTrafficLight = () => {
  const [currentLight, setCurrentLight] = useState(0);

  const nextLight = () => {
    setCurrentLight(currentLight + 1 <= 2 ? currentLight + 1 : 0);
  };

  const getCircleClass = (lightColor) => {
    return currentLight === lights.indexOf(lightColor) ? lightColor : "black";
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${getCircleClass("red")}`}></div>
        <div className={`circle ${getCircleClass("yellow")}`}></div>
        <div className={`circle ${getCircleClass("green")}`}></div>
      </div>
      <button className="next-state-button" onClick={nextLight}>
        Next State
      </button>
    </div>
  );
};
