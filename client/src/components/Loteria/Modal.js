import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import Semaforo from "./Semaforo.js";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import NationalGraph from "./NationalGraph";
import { casos, muertes } from "./Data";
import "./Modal.css";

const Modal = (props) => {
  const [graphData, setGraphData] = React.useState({
    checkedA: true,
    nationalData: casos,
    tipoDatos: "Casos Nacionales Activos",
  });
  const handleChange = (event) => {
    if (event.target.checked == true) {
      setGraphData({
        ...graphData,
        [event.target.name]: event.target.checked,
        nationalData: casos,
        tipoDatos: "Casos Nacionales Activos",
      });
    } else {
      setGraphData({
        ...graphData,
        [event.target.name]: event.target.checked,
        nationalData: muertes,
        tipoDatos: "Defunciones Nacionales",
      });
    }
  };

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* div modal header starts */}
          <div className="modal-header">
            <h1 className="modal-title">{props.title}</h1>
            <h2 className="modal-date">{props.dateOfChange}</h2>
          </div>
          {/* div modal header ends */}

          {/* div modal footer starts */}
          <div className="modal-footer">
            {/* div semaforo starts */}
            <div className="semaforoActual">
              <Semaforo color={props.currentTrafficLight} />
              <div className="semaforo-anterior">
                <h4>Semaforo anterior</h4>
                <p>{props.lastTrafficLight}</p>
              </div>
            </div>
            {/* div semaforo ends */}

            <div>
              <div>
                <h2>
                  <strong> {graphData.tipoDatos} Gráfica</strong>
                </h2>
              </div>
              <NationalGraph data={graphData.nationalData} />
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={graphData.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                    />
                  }
                  label={graphData.tipoDatos}
                />
              </FormGroup>
            </div>

            {/* div data starts */}
            <div id="wrapper" className="data-padding">
              <div>
                Casos COVID-19<div>6325</div>
              </div>
              <div>
                Aumento de casos COVID-19<div>1520</div>
              </div>
              <div>
                Defunciones<div>1200</div>
              </div>
              <div>
                Aumento defunciones<div>320</div>
              </div>
            </div>
            {/* div data ends */}

            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
          {/* div modal footer ends */}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
