import React from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';

function LandingHeader({ classes }) {
    classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <h2>Header</h2>
            </div>
            <div>

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

export default LandingHeader
