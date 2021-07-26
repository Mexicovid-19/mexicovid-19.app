import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import CardTemplate from "./CardTemplate";
import Modal from "./Modal";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper() {
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  /* 
  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        <CardTemplate/>
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>Something</div>
      </Popper>
    </div>
  ); 
  */

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>
        <CardTemplate></CardTemplate>
      </button>
      <Modal title="Nuevo Leon" onClose={() => setShow(false)} show={show}>
        <p>COVID-19 NL</p>
      </Modal>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <>
        <SimplePopper />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
