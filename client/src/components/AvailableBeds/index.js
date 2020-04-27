import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/';
import Footer from '../Footer/';
import * as colors from '../../constants/colors';

const Team = ({classes}) => {
  
  return (
    <div className={classes.container}>
        <Header fixed={true}/>
            <div className={classes.teamsContainer}>
                <header className={classes.header}>
                    <Typography className={classes.h1} variant={'h1'}>¿Quiénes Somos?</Typography>	
                </header>
                <div className="container text-justify">      
                    <section className={classes.section}>
                            <div id='viz1586987076307'>
                                <noscript>
                                    <a href='#'>
                                        <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;me&#47;mexicovid19_camasv2&#47;Dashboard1&#47;1_rss.png' style='border: none' />
                                    </a>
                                </noscript>
                                <object>
                                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
                                    <param name='embed_code_version' value='3' /> 
                                    <param name='site_root' value='' />
                                    <param name='name' value='mexicovid19_camasv2&#47;Dashboard1' />
                                    <param name='tabs' value='no' />
                                    <param name='toolbar' value='yes' />
                                    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;me&#47;mexicovid19_camasv2&#47;Dashboard1&#47;1.png'/>
                                    <param name='animate_transition' value='yes' />
                                    <param name='display_static_image' value='yes' />
                                    <param name='display_spinner' value='yes' />
                                    <param name='display_overlay' value='yes' />
                                    <param name='display_count' value='yes' />
                                    <param name='filter' value='publish=yes' />
                                </object>
                            </div>   
                            <script type='text/javascript'>
                            var vizElement = divElement.getElementsByTagName('object')[0];
                                  
                            </script>
                    </section>
                </div>   
            </div>
      <Footer/>
    </div>
    );
}

const styles = () => ({
    section: {
          margin: '20px 0px',
      borderRadius: '5px',
      padding: '20px',
      backgroundColor: colors.GRAY,
      },
    
    container: {
      width: '100%',
      backgroundColor: colors.GRAY,
    },
  
    teamsContainer: {
      width: '70%',
          margin: 'auto',
          padding: '25px',
      paddingTop: '128px',
      backgroundColor: colors.WHITE
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
   
 export default withStyles(styles)(Team);