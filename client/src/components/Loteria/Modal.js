import React from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import Semaforo from "./Semaforo.js"
import "./Modal.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div
        className={`modal ${props.show ? "show" : ""}`}
        onClick={props.onClose}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <div className="semaforoActual">
              <Semaforo color = {props.currentTrafficLight}/>
            </div>
            <div className="fecha-de-cambio">
              <h4>Ultima fecha de cambio</h4>
              <p>{props.dateOfChange}</p>
            </div>
            <div className="semaforo-anterior">
              <h4>Semaforo anterior</h4>
              <p>{props.lastTrafficLight}</p>
            </div>
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
