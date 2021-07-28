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


const estadosMexicanos= estados

export default function SimplePopper({index}) {
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const estado= estadosMexicanos[index]
  const infoEstado= estados.texto

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>
        <NewCard index={index}/>
      </button>
      <Modal title="Nuevo Leon" onClose={() => setShow(false)} show={show}>
        <p>{infoEstado}</p>
      </Modal>
    </div>
  );
}