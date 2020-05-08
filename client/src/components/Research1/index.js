import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import tableau from 'tableau-react'; 

const Research1 = ({ classes }) => {
  const vizContainerCam = React.useRef(null);
  React.useEffect(() => {
    const vizUrlCam = "https://public.tableau.com/shared/S4K82DYG9?:display_count=y&:origin=viz_share_link&:embed=y";  
    let viz =  new window.tableau.Viz(vizContainerCam, vizUrlCam);

    //https://public.tableau.com/views/COVID19-Calculadora/InformacinCovid-19Mxico?:embed=y&:display_count=y&:origin=viz_share_link
    //https://public.tableau.com/shared/S4K82DYG9?:display_count=y&:origin=viz_share_link&:embed=y
    
  })
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

export default withStyles(styles)(Research1);
