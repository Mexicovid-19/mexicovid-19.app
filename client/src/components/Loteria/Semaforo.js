import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Semaforo.css";

export default function TrafficLight(props) {
  return (
    <ul className="traffic-light">
      <li key = {1}>
        <span className={props.color === "rojo" ? "on":"off"}/>
      </li>
      <li key = {2}>
        <span className={props.color === "naranja" ? "on":"off"}/>
      </li>
      <li key = {3}>
        <span className={props.color === "amarillo" ? "on":"off"}/>
      </li>
      <li key = {4}>
        <span className={props.color === "verde" ? "on":"off"}/>
      </li>
    </ul>
  );
}
