import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import tableau from 'tableau-react'; 
import {Helmet} from 'react-helmet';

const Uncertainty = ({ classes }) => {
  const vizContainerCam = React.useRef(null);
  React.useEffect(() => {
    const vizUrlCam = "https://public.tableau.com/views/mexicovid19_simulacin/MXCOVIDANALYSIS?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fpublic.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:animate_transition=yes&amp;:display_static_image=no&amp;:display_spinner=no&amp;:display_overlay=yes&amp;:display_count=yes&amp;:loadOrderID=0";  
    let viz =  new window.tableau.Viz(vizContainerCam, vizUrlCam);
  })
  document.title = "Análisis de simulación del covid-19 bajo incertidumbre | MexiCOVID";
return (
  <div>
    <Helmet>
			<title>Análisis de simulación del covid-19 bajo incertidumbre | MexiCOVID</title>
			<meta name="description" content="Metodología utilizada en MexiCOVID19" />
			<meta property="og:image" content="http://mexicovid19.app/img/mediashare/incertidumbre.PNG" />
			<meta name="keywords" content="simulacion incertidumbre, coronavirus mexico tec,casos coronavirus simulacion,coronavirus simulacion,cuanto tiempo falta coronavirus"/>
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
