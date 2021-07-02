import React from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';


export default function Legend({ classes }) {
    classes = useStyles();

    return (
        <div className={classes.legendContainer}>
            <div className={classes.legend}>
            <div className={classes.circle} style={{background: '#4AA461'}}></div>
            <p className={classes.legendText}>Adrian</p>
            </div>
            <div className={classes.legend}>
            <div className={classes.circle} style={{background: '#C1311B'}}></div>
            <p className={classes.legendText}>Clara Luz</p>
            </div>
            <div className={classes.legend}>
            <div className={classes.circle} style={{background: '#0958A5'}}></div>
            <p className={classes.legendText}>Fernando</p>
            </div>
            <div className={classes.legend}>
            <div className={classes.circle} style={{background: '#F18131'}}></div>
            <p className={classes.legendText}>Samuel</p>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    legendContainer: {
        background: 'rgba(255,255,255,0.05)',
        padding: '20px',
        borderRadius: '15px',
    },
    legend: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 5
    },
    circle: {
        width: '15px',
        height: '15px',
        borderRadius: '5px',
        marginRight: '10px',
    },
    legendText: {
        color: 'white',
        marginBottom: 0
    },

    
    [`@media (min-width: ${1000}px)`]: {
        legendContainer: {
            display: 'flex',
            justifyContent: 'space-evenly'
        },
        legend: {
            marginRight: 10
        }
    },
}));

