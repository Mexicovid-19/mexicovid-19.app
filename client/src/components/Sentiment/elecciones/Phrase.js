import React from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';

export default function Phrase({ classes }) {
    classes = useStyles();
    return (
        <div className={classes.component}>
            <div className={classes.line}></div>
            <div className={classes.phraseContainer}>
                <div className={classes.phraseInnerContainer}>
                    <FormatQuoteRoundedIcon style={{fontSize: 35, color: 'white'}}/>
                    <h3 className={classes.phrase}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                    <p className={classes.author}>——— Roberto Ponce López</p>
                </div>
                
            </div>
            <div className={classes.lineB}></div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    component:{
        width: '100%',
        height:'100vh',
        background: 'rgb(34, 35, 35)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    line: {
        width: '2px',
        height: '150px',
        background: 'white',
        margin: ' auto',
    },
    lineB: {
        width: '2px',
        height: '150px',
        background: 'white',
        margin: ' auto',
    },
    phraseContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    phraseInnerContainer: {
        width: '90%',
        maxWidth: '600px',
        borderRadius: '10px',
        border: '1px solid white',
        padding: '50px',
        diplay: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
    },
    phrase: {
        fontWeight: 'bolder',
        fontSize: '25px',
        margin: '10px 0px 10px 0px'
    },
    author: {
        textAlign: 'right'
    }
}));

