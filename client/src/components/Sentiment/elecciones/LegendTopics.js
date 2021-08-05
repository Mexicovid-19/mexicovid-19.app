import React from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';

export default function LegendTopics(props) {
    const classes = useStyles();
    return (
        <div className={classes.legendContainer}>
            <div className={classes.legendRow}>
            <div className={classes.legend}>
            <div className={classes.circle} style={{background: '#1BAFD0'}}></div>
            <p className={classes.legendText}>{props.topico1}</p>
            </div>
            <div className={classes.legend}>
            <div className={classes.circle} style={{background: '#FD636B'}}></div>
            <p className={classes.legendText}>{props.topico2}</p>
            </div>
            </div>                    
            <div classes={classes.legendRow}>
            <div className={classes.legend}>
            <div className={classes.circle} style={{background: '#FFB900'}}></div>
            <p className={classes.legendText}>{props.topico3}</p>
            </div>
            <div className={classes.legend}>
            <div className={classes.circle} style={{background: '#3BE8B0'}}></div>
            <p className={classes.legendText}>{props.topico4}</p>
            </div>
            </div>
            <div classes={classes.legendRow}>
            <div className={classes.legend}>
            <div className={classes.circle} style={{background: '#6967CE'}}></div>
            <p className={classes.legendText}>{props.topico5}</p>            
            </div>
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
    legendRow: {
        wordBreak: 'break-all',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 2,
        flexDirection: 'column',
        alignContent: 'center'
    },
    legend: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    circle: {
        width: '15px',
        height: '15px',
        borderRadius: '5px',
        marginRight: '10px',
    },
    legendText: {
        color: 'white',
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

