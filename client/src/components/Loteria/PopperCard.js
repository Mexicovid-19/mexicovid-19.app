import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import {NewCard} from "./NuevaTarjeta";
import Modal from "./Modal";
import { useState } from "react";
import estados from './estados/estados.json'

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

const estadosMexicanos = estados

export default function SimplePopper(props) {
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  var num = props.index
 const estado= estadosMexicanos[props.index]    
  return (
    <div className="App">
      <button onClick={() => {setShow(true);}}>
        <NewCard index={props.index}/>
      </button>
      <Modal title={estado.estado} onClose={() => setShow(false)} show={show}>
        <p>{estado.id}</p>
      </Modal>
    </div>
  );
}
