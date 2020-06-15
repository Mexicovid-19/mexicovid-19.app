import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import tableau from 'tableau-react'; 
import { Helmet } from 'react-helmet';

const MunicipalitiesFollow = ({ classes }) => {
  const vizContainer = React.useRef(null);
  React.useEffect(() => {
    const vizUrl = "https://public.tableau.com/views/mexicovid19_municipal/Dashboard1?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fpublic.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:animate_transition=yes&amp;:display_static_image=no&amp;:display_spinner=no&amp;:display_overlay=yes&amp;:display_count=yes&amp;:loadOrderID=0";  
    let viz =  new window.tableau.Viz(vizContainer, vizUrl);
  })
  document.title = "Seguimiento por municipio | MexiCOVID";
  return (
    <div>
      <Helmet>
			<title>Seguimiento por municipio | MexiCOVID</title>
			<meta name="description" content="Gráfico interactivo y mapa de casos de COVID-19 por municipio en México" />
			<meta property="og:image" content="https://mexicovid19.app/img/mediashare/municipios.PNG" />
			<meta name="keywords" content="seguimiento por municipio,municipio covid, coronavirus mexico tec,casos coronavirus estado,coronavirus casos, divulgacion covid"/>
			
      <meta property="og:image" content="https://mexicovid19.app/img/mediashare/municipios.PNG"/>
      <meta property="og:title" content="Seguimiento por municipio | MexiCOVID"/>

      </Helmet>
      <div ref={vizContainer} className={classes.container}></div>
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

export default withStyles(styles)(MunicipalitiesFollow);

