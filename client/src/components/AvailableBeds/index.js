import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/';
import Footer from '../Footer/';
import * as colors from '../../constants/colors';
import tableau from 'tableau-api'; 
 
 
 /*const AvailableBeds = ({classes}) => {
  const vizContainer = React.useRef(null);
  React.useEffect(() => {
      const vizUrl = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";  
      let viz = new window.tableau.Viz(vizContainer, vizUrl) 
  }, [])

   return (
      <div ref={vizContainer}>  
      </div>  
     );
 }*/
 
  const AvailableBeds = ({classes}) => {
  const vizContainer = React.useRef(null);
  React.useEffect(() => {
      const vizUrl = "https://public.tableau.com/views/mexicovid19_edades/Dashboard1?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=yes&:animate_transition=yes&:display_static_image=no&:display_spinner=no&:display_overlay=yes&:display_count=yes&publish=yes&:loadOrderID=0";  
      let viz = new window.tableau.Viz(vizContainer, vizUrl);
      console.log(viz);
  }, [])

  return (
    <div className={classes.container}>
      <Header fixed={true}/>
        <div ref={vizContainer} className={classes.graphicContainer}  >
        </div>
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
    
  export default withStyles(styles)(AvailableBeds);
 