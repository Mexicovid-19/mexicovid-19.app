import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import * as colors from '../../constants/colors';

const CalculatorSimulation = ({ classes }) => {
    document.title = "Prospectiva | MexiCOVID";

import Calculadora from '../Calculadora';

function valuetext(value) {
	return `${value}°C`;
}

const Calculator = ({ classes }) => {
    const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
	});
	
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
    return (
        <div>
			hola?
		</div>
    );
}

const styles = () => ({
    container: {
      width: '100%',
          backgroundColor: colors.GRAY,
          flex: 1, 
          overflow: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'
    },
    graphContainer: {
      width: '100%',
      flex: 1,
      display: 'flex', 
      flexDirection: 'column'
  },
    regionsContainer: {
      width: '70%',
      margin: 'auto',
      padding: '25px',
      paddingTop: '118px',
      backgroundColor: colors.WHITE
      },
      regionsContainer1: {
          width: '70%',
          margin: 'auto',
          padding: '25px',
          paddingTop: '30px',
          backgroundColor: colors.WHITE
      },
      
      h1: {
          fontSize: '36px'
      },
  
      header: {
          borderBottom: `1px solid ${colors.BLACK}`,
          display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      },
  
      label: {
          color: colors.GRAY_LIGHT
      },
      
      textcontainer:{
          textAlign:'justify',
          fontSize:'10px',
      },
  
      [`@media (max-width: ${1000}px)`]: {
          regionsContainer: {
              width: '100%',
              padding: '10px',
              paddingTop: '60px'
          },
          regionsContainer1: {
              width: '100%',
              padding: '10px',
              paddingTop: '20px'
          },
          header: {
              alignItems: 'flex-end'
          },
          h1: {
              fontSize: '24px'
          },
        },
  });
}
export default withStyles(styles)(Calculator);