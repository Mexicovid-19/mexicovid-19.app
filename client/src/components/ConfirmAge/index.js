import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import tableau from 'tableau-react'; 

const ConfirmAge = ({ classes }) => {
  const vizContainerCam = React.useRef(null);
  React.useEffect(() => {
    const vizUrlCam = "https://public.tableau.com/views/mexicovid19_edades/Dashboard1?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=yes&:animate_transition=yes&:display_static_image=no&:display_spinner=no&:display_overlay=yes&:display_count=yes&publish=yes&:loadOrderID=0";  
    let viz =  new window.tableau.Viz(vizContainerCam, vizUrlCam);
  })
  document.title = "Casos confirmados acumulados de COVID-19 por rango de edad | MexiCOVID";
  return (
    <div ref={vizContainerCam}></div>
  );
}

const styles = () => ({
  section: {
    margin: '20px 0px',
    borderRadius: '5px',
    padding: '20px',
    backgroundColor: colors.GRAY,
    height: '800px'
  },
  
  container: {
    width: '100%',
    backgroundColor: colors.GRAY,
  },

  graphicContainer: {
    marginTop: '50px'
  },
  
  header: {
    borderBottom: `1px solid ${colors.BLACK}`,
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  h1: {
    fontSize: '36px'
  },
  
  textclass: {
    marginTop: '0px',
    marginBottom: '0px'
  },   
});

export default withStyles(styles)(ConfirmAge);
