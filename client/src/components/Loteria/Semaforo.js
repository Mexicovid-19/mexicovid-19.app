import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Semaforo.css";

export default function TrafficLight(props) {
  // const [lights, setLights] = useState([false, false, false, false]);
  // if (props.currentTrafficLight == "verde") {
  //   lights[1] = true;
  // } else if (props.currentTrafficLight == "amarillo") {
  //   lights[2] = true;
  // } else if (props.currentTrafficLight == "naranja") {
  //   lights[3] = true;
  // } else {
  //   lights[4] = true;
  // }
  // setLights([...newLights]);
  // function setActiveLight(isActive, index) {
  //   if (isActive) {
  //     lights[index] = false;
  //     setLights([...lights]);
  //   } else if (lights.every(active => !active)) {
  //     lights[index] = true;
  //     setLights([...lights]);
  //   }
  // }
  return (
    <ul className="traffic-light">
      {/* {lights.map((isActive, index) => (
        <li key={index} onClick = {() => setActiveLight(isActive, index)}>
          <span className={isActive ? "on" : "off"} />
        </li>
      ))} */}
      <li key = {1}>
        <span className={props.color === "rojo" ? "on":"off"}/>
      </li>
      <li key = {2}>
        <span className={props.color === "naranja" ? "on":"off"}/>
      </li>
      <li key = {3}>
        <span className={props.color === "amarrillo" ? "on":"off"}/>
      </li>
      <li key = {4}>
        <span className={props.color === "verde" ? "on":"off"}/>
      </li>
    </ul>
  );
}
