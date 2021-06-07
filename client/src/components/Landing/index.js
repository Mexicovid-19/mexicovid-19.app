import React from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';

/* Components */
import LandingHeader from '../Header/LandingHeader'

function Landing({ classes }) {
    classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.overlay}>
                {/* Header */}
                <LandingHeader/>

                {/* title */}
                <h1 className={classes.title}>Mexicovid-19</h1>

                {/* Description */}
                <h3 className={classes.description}></h3>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    background: {

    },
    overlay: {

    },
    title: {

    },
    description: {

    },

  [`@media (max-width: ${999}px)`]: {
    
  },

  [`@media (max-width: ${600}px)`]: {
    
  }
}));

export default Landing
