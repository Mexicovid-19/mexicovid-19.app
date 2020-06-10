import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import tableau from 'tableau-react'; 
import {Helmet} from 'react-helmet';

const Uncertainty = ({ classes }) => {
  const vizContainerCam = React.useRef(null);
  React.useEffect(() => {
    const vizUrlCam = "https://public.tableau.com/views/R0_analysis_new_15904200198760/Calibracin?:increment_view_count=no&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link";  
    let viz =  new window.tableau.Viz(vizContainerCam, vizUrlCam);
  })
  document.title = "Análisis de simulación del covid-19 bajo incertidumbre | MexiCOVID";
return (
  <div>
    <Helmet>
			<title>Análisis de simulación del covid-19 bajo incertidumbre | MexiCOVID</title>
			<meta name="description" content="Análisis de simulación del covid-19 bajo incertidumbre" />
			<meta property="og:image" content="http://mexicovid19.app/img/mediashare/incertidumbre.PNG" />
			<meta name="keywords" content="simulacion incertidumbre, coronavirus mexico tec,casos coronavirus simulacion,coronavirus simulacion,cuanto tiempo falta coronavirus"/>

      <meta property="og:title" content="Análisis de simulación del covid-19 bajo incertidumbre | MexiCOVID"/>
      <meta property="og:description" content="Análisis de simulaciones del COVID19 bajo incertidumbre"/>
    </Helmet>
    <div ref={vizContainerCam}></div>
  </div>
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

export default withStyles(styles)(Uncertainty);
