import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";

export default function TrafficLight(props){
     const classes= useStyles()
     if(props.color==='verde'){
    return(
        <div className={classes.container}>
            <div className={classes.circle} >
            </div>
            <div className={classes.circle}>
            </div>
            <div className={classes.circle}>
            </div>
            <div className={classes.circle} style={{backgroundColor: '#2ecc71', boxShadow: '0 0 20px 5px #2ecc71'}}>
            </div>
        </div>
    )
     }
     else if(props.color==='naranja'){
        return(
            <div className={classes.container}>
                <div className={classes.circle} >
                </div>
                <div className={classes.circle} style={{backgroundColor: '#e69045', boxShadow: '0 0 20px 5px #e69045'}}>
                </div>
                <div className={classes.circle}>
                </div>
                <div className={classes.circle}>
                </div>
            </div>
        )
         }
         else if(props.color==='amarillo'){
            return(
                <div className={classes.container}>
                    <div className={classes.circle} >
                    </div>
                    <div className={classes.circle}>
                    </div>
                    <div className={classes.circle}style={{backgroundColor: '#f1c40f', boxShadow: '0 0 20px 5px #f1c40f'}}>
                    </div>
                    <div className={classes.circle}>
                    </div>
                </div>
            )
             }
             else if(props.color==='rojo'){
                return(
                    <div className={classes.container}>
                        <div className={classes.circle} style={{backgroundColor: '#c0392b', boxShadow: '0 0 20px 5px #c0392b'}}>
                        </div>
                        <div className={classes.circle}>
                        </div>
                        <div className={classes.circle}>
                        </div>
                        <div className={classes.circle} >
                        </div>
                    </div>
                )
                 }   
};
const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: '#2c3e50',
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '300px',
        width: '85px',
    },
    circle:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '100%',
        position: 'relative',
        height: '55px',
        width: '55px',
        borderRight: '4px solid rgba(255, 255, 255, 0.6)',
        content: ' ',
        top: '5px',
        left: '0px',
    },
    red :{
        backgroundColor: '#c0392b',
        boxShadow: '0 0 20px 5px #c0392b'
    },
    
    yellow:{
        backgroundColor: '#f1c40f',
        boxShadow: '0 0 20px 5px #f1c40f',
    },
    
    green:{
        backgroundColor: '#2ecc71',
        boxShadow: '0 0 20px 5px #2ecc71',
    }

}));