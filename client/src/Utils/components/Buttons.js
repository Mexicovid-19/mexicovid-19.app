import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const WhiteButton = withStyles((theme) => ({
  root: {
    color: "rgb(20,20,20)",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: "25px",
    transition: "transform 450ms",
    fontWeight: "bolder",
    padding: "15px 20px",
    marginBottom: '20px',
    width: "100%",
    top: "10px",
    
    '&:hover': {
      backgroundColor: "rgb(245, 245, 255)",
      transform: "scale(1.02)",
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: "rgb(255, 255, 255)",
      border: 'none',
    },
    '&:focus': {
      backgroundColor: "rgb(255, 255, 255)",
    },
  },
}))(Button);

export { WhiteButton }