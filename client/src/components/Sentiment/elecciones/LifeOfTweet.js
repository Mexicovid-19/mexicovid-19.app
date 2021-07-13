import React, { useState, useEffect } from 'react'

/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';

// Utils
import * as colors from '../../../constants/colors';
import CompoundLine from './CompoundLine.js';

//D3
import * as d3 from "d3"

//data
import hashtag_csv from './data/hashtag.csv'

export default function LifeOfTweet({ classes }) {
    classes = useStyles();
    const [state, setState] = useState({
        data: []
    })

    var loadFiles = [
        d3.csv(hashtag_csv)
    ]

    useEffect(() => {
        Promise.all(loadFiles).then(function (data){
            console.log(data)

            let dataa = []
            let date = data[0][0].date
            let count = 0
            data[0].map(item => {
                if(item.date == date){
                    count += 1
                } else{
                    dataa.push({
                        date: date,
                        count: count
                    })
                    date = item.date
                    count = 1
                }
            })
            console.log(dataa)
            setState({...state, data: dataa})
        })
    },[])

    const data = [
        {
            "id": "hashtag",
            "color": "hsl(25, 87%, 57%)",
            "data": [
                {x: "2021/03/04", y: 2},
                {x: "2021/03/05", y: 2},
                {x: "2021/03/06", y: 1},
                {x: "2021/03/08", y: 3},
                {x: "2021/03/18", y: 1},
                {x: "2021/03/23", y: 1},
                {x: "2021/03/24", y: 71},
                {x: "2021/03/25", y: 9},
                {x: "2021/03/26", y: 6},
                {x: "2021/03/27", y: 6},
                {x: "2021/03/28", y: 6},
                {x: "2021/03/29", y: 5},
                {x: "2021/04/02", y: 1},
                {x: "2021/04/04", y: 1},
                {x: "2021/04/08", y: 1},
                {x: "2021/04/17", y: 1},
                {x: "2021/04/22", y: 4},
                {x: "2021/04/26", y: 1},
                {x: "2021/05/10", y: 1},
                {x: "2021/05/11", y: 1},
                {x: "2021/05/15", y: 1},
                {x: "2021/05/16", y: 2},
                {x: "2021/05/23", y: 1}
            ]
        }
    ]

    return (
        <div className={classes.component}>
            <div className={classes.line}></div>
            <div className={classes.container}>
                <div className={classes.itemsContainer}>
                    <div className={classes.itemContainer}>
                         <div className={classes.titleContainer}>
                            <h2 className={classes.subtitle}><strong>Vida de una tweet (#NXIVM)</strong></h2>
                        </div>
                        <div className={classes.scrollContainer}>
                          <p className={classes.scrollText}>scroll</p>
                          <ArrowRightAltRoundedIcon className={classes.scrollIcon}/>
                        </div>
                        <div className={classes.chartContainer}>
                            
                                <CompoundLine data={data}/>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.lineB}></div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    component:{
        width: '100%',
        background: 'rgb(34, 35, 35)',
    },
    line: {
        width: '2px',
        height: '50px',
        background: 'white',
        margin: '0px auto',
    },
    lineB: {
        width: '2px',
        height: '50px',
        background: 'white',
        margin: '0px auto',
    },
    container: {
        width: '95%',
        maxWidth: '1500px',
        margin: 'auto',
        border: '1px solid white',
        borderRadius: '10px'
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: '0.5'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.WHITE,
        flex: 1
    },
    itemsContainer: {
        padding: '20px 20px'
    },
    itemContainer: {
        padding: 30,
        overflowX: 'scroll',
        flex: 1
    },
    itemContainer2: {
        padding: 30,
        overflowX: 'scroll',
        flex: 0.3
    },
    description: {
        color: colors.WHITE,
        paddingTop: 50,
        textAlign: 'justify'
    },
    chartContainer: {
        height: '600px',
        minHeight: '600px',
        minWidth: 800,
        flex: 1,
        margin: 'auto',
    },
    chartFooterContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems:  'center'
    },
    formControl: {
        minWidth: 100,
        flex: 1,
        marginRight: 20
    },
    scrollContainer: {
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'right',
      position: 'relative',
      top: '30px'
    },
    scrollText: {
      marginBottom: 0,
      marginRight: 5,
      flex: 1
    },
    scrollIcon: {
      
    },
    [`@media (min-width: ${1001}px)`]: {
        component:{
            width: '100%',
            height:'100vh',
            background: 'rgb(34, 35, 35)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        itemsContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 20px'
        },
        chartContainer: {
            //width: '50vw',
            flex: 1,
        },
        subtitle: {
            fontSize: 20,
        },
        scrollContainer: {
          display: 'none'
        },
        formControl: {
          position: 'relative',
          top: 15
        }
    },
    [`@media (max-width: ${1000}px)`]: {
        subtitle: {
            fontSize: 20,
        },
    },
    [`@media (max-width: ${576}px)`]: {
        chartFooterContainer: {
          display: 'block'
        },
        description: {
          textAlign: 'justify',
          paddingTop: 20
        }
    },
}));