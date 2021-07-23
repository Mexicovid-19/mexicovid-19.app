import React, { useEffect, useState } from 'react'

/* Material UI */
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// Utils
import * as colors from '../../../constants/colors';
import CompoundLine from './CompoundLine.js';

export default function FearVsTrust({ classes }) {
    classes = useStyles();
    const StyledFormControlLabel = withStyles({
        root: {
            color:'white',
        },
      })(FormControlLabel);
    const CustomAdrianCheckbox = withStyles({
        root: {
          color: "#4AA461",
          '&$checked': {
            color: "#4AA461",
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />); 
      const CustomAdrianCheckbox2 = withStyles({
        root: {
          color: "#73ff96",
          '&$checked': {
            color: "#73ff96",
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />); 
      
    const CustomClaraCheckbox = withStyles({
        root: {
          color: "#C1311B",
          '&$checked': {
            color: "#C1311B",
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);
    const CustomClaraCheckbox2 = withStyles({
        root: {
          color: "#e35944",
          '&$checked': {
            color: "#e35944",
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);
    const CustomSamuelCheckbox = withStyles({
        root: {
          color: "#F18131",
          '&$checked': {
            color: "#F18131",
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);  
      const CustomSamuelCheckbox2 = withStyles({
        root: {
          color: "#ffb987",
          '&$checked': {
            color: "#ffb987",
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);      
    const CustomFernandoCheckbox = withStyles({
        root: {
          color: "#0958A5",
          '&$checked': {
            color: "#0958A5",
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);
      const CustomFernandoCheckbox2 = withStyles({
        root: {
          color: "#52a8ff",
          '&$checked': {
            color: "#52a8ff",
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);      
    const candidatosBase = [{
      "id": "Adrian Miedo",
      "color": "hsl(135, 37%, 48%)",
      "data": [
          {
            "x": "07/03/21",
            "y": 0.032533092
          },
          {
            "x": "14/03/21",
            "y": 0.02723218
          },
          {
            "x": "21/03/21",
            "y": 0.034274696
          },
          {
            "x": "28/03/21",
            "y": 0.041253648
          },
          {
            "x": "04/04/21",
            "y": 0.038803401
          },
          {
            "x": "11/04/21",
            "y": 0.040145009
          },
          {
            "x": "18/04/21",
            "y": 0.040727549
          },
          {
            "x": "25/04/21",
            "y": 0.034765904
          },
          {
            "x": "02/05/21",
            "y": 0.026030589
          },
          {
            "x": "09/05/21",
            "y": 0.036758714
          },
          {
            "x": "16/05/21",
            "y": 0.072934505
          },
          {
            "x": "23/05/21",
            "y": 0.040235589
          },
          {
            "x": "30/05/21",
            "y": 0.039106333
          },
          {
            "x": "06/06/21",
            "y": 0.042903201
          } 
      ]
          },
          {
            "id": "Clara Luz Miedo",
            "color": "hsl(8, 76%, 43%)",
            "data": [
              {
                "x": "07/03/21",
                "y": 0.040932537
              },
              {
                "x": "14/03/21",
                "y": 0.044216385
              },
              {
                "x": "21/03/21",
                "y": 0.06788945
              },
              {
                "x": "28/03/21",
                "y": 0.065236242
              },
              {
                "x": "04/04/21",
                "y": 0.049975209
              },
              {
                "x": "11/04/21",
                "y": 0.049383877
              },
              {
                "x": "18/04/21",
                "y": 0.060587331
              },
              {
                "x": "25/04/21",
                "y": 0.043822435
              },
              {
                "x": "02/05/21",
                "y": 0.05030754
              },
              {
                "x": "09/05/21",
                "y": 0.038516095
              },
              {
                "x": "16/05/21",
                "y": 0.042364478
              },
              {
                "x": "23/05/21",
                "y": 0.04079244
              },
              {
                "x": "30/05/21",
                "y": 0.046807574
              },
              {
                "x": "06/06/21",
                "y": 0.043947891
              }            
            ]
          },
          {
            "id": "Fernando Miedo",
            "color": "hsl(210, 90%, 34%)",
            "data": [
              {
                "x": "07/03/21",
                "y": 0.026113802
              },
              {
                "x": "14/03/21",
                "y": 0.036353984
              },
              {
                "x": "21/03/21",
                "y": 0.034230066
              },
              {
                "x": "28/03/21",
                "y": 0.036917938
              },
              {
                "x": "04/04/21",
                "y": 0.034553923
              },
              {
                "x": "11/04/21",
                "y": 0.040013232
              },
              {
                "x": "18/04/21",
                "y": 0.02934176
              },
              {
                "x": "25/04/21",
                "y": 0.030907504
              },
              {
                "x": "02/05/21",
                "y": 0.02942666
              },
              {
                "x": "09/05/21",
                "y": 0.043973109
              },
              {
                "x": "16/05/21",
                "y": 0.044725429
              },
              {
                "x": "23/05/21",
                "y": 0.037527761
              },
              {
                "x": "30/05/21",
                "y": 0.03485453
              },
              {
                "x": "06/06/21",
                "y": 0.032769102
              }
            ]
          },
          {
            "id": "Samuel Miedo",
            "color": "hsl(25, 87%, 57%)",
            "data": [
                {
                  "x": "07/03/21",
                  "y": 0.032516067
                },
                {
                  "x": "14/03/21",
                  "y": 0.035478286
                },
                {
                  "x": "21/03/21",
                  "y": 0.046212673
                },
                {
                  "x": "28/03/21",
                  "y": 0.040221949
                },
                {
                  "x": "04/04/21",
                  "y": 0.033495088
                },
                {
                  "x": "11/04/21",
                  "y": 0.061850455
                },
                {
                  "x": "18/04/21",
                  "y": 0.037271538
                },
                {
                  "x": "25/04/21",
                  "y": 0.042053405
                },
                {
                  "x": "02/05/21",
                  "y": 0.041596466
                },
                {
                  "x": "09/05/21",
                  "y": 0.039301337
                },
                {
                  "x": "16/05/21",
                  "y": 0.040604646
                },
                {
                  "x": "23/05/21",
                  "y": 0.033937657
                },
                {
                  "x": "30/05/21",
                  "y": 0.044160639
                },
                {
                  "x": "06/06/21",
                  "y": 0.040863272
                }
            ]
          },
          {
            "id": "Adrian Confianza",
            "color": "hsl(135, 100%, 73%)",
            "data": [
              {
                "x": "07/03/21",
                "y": 0.116697999
              },
              {
                "x": "14/03/21",
                "y": 0.11946959
              },
              {
                "x": "21/03/21",
                "y": 0.117855919
              },
              {
                "x": "28/03/21",
                "y": 0.092707523
              },
              {
                "x": "04/04/21",
                "y": 0.09207438
              },
              {
                "x": "11/04/21",
                "y": 0.089888899
              },
              {
                "x": "18/04/21",
                "y": 0.101783992
              },
              {
                "x": "25/04/21",
                "y": 0.087035167
              },
              {
                "x": "02/05/21",
                "y": 0.131686587
              },
              {
                "x": "09/05/21",
                "y": 0.106006006
              },
              {
                "x": "16/05/21",
                "y": 0.13765627
              },
              {
                "x": "23/05/21",
                "y": 0.105025599
              },
              {
                "x": "30/05/21",
                "y": 0.11653534
              },
              {
                "x": "06/06/21",
                "y": 0.130981061
              }
            ]
          },
          {
            "id": "Clara Luz Confianza",
            "color": "hsl(8, 74%, 58%)",
            "data": [
              {
                "x": "07/03/21",
                "y": 0.101138818
              },
              {
                "x": "14/03/21",
                "y": 0.100999325
              },
              {
                "x": "21/03/21",
                "y": 0.082432764
              },
              {
                "x": "28/03/21",
                "y": 0.089501837
              },
              {
                "x": "04/04/21",
                "y": 0.083485683
              },
              {
                "x": "11/04/21",
                "y": 0.074508667
              },
              {
                "x": "18/04/21",
                "y": 0.086582462
              },
              {
                "x": "25/04/21",
                "y": 0.075173825
              },
              {
                "x": "02/05/21",
                "y": 0.09792603
              },
              {
                "x": "09/05/21",
                "y": 0.101036925
              },
              {
                "x": "16/05/21",
                "y": 0.089557226
              },
              {
                "x": "23/05/21",
                "y": 0.102094941
              },
              {
                "x": "30/05/21",
                "y": 0.119675686
              },
              {
                "x": "06/06/21",
                "y": 0.112214283
              }
            ]
          },
          {
            "id": "Fernando Confianza",
            "color": "hsl(210, 100%, 66%)",
            "data": [
              {
                "x": "07/03/21",
                "y": 0.132039968
              },
              {
                "x": "14/03/21",
                "y": 0.110422213
              },
              {
                "x": "21/03/21",
                "y": 0.094332022
              },
              {
                "x": "28/03/21",
                "y": 0.073332349
              },
              {
                "x": "04/04/21",
                "y": 0.082484279
              },
              {
                "x": "11/04/21",
                "y": 0.096887324
              },
              {
                "x": "18/04/21",
                "y": 0.100361864
              },
              {
                "x": "25/04/21",
                "y": 0.093789934
              },
              {
                "x": "02/05/21",
                "y": 0.116293283
              },
              {
                "x": "09/05/21",
                "y": 0.114320692
              },
              {
                "x": "16/05/21",
                "y": 0.117981226
              },
              {
                "x": "23/05/21",
                "y": 0.108163629
              },
              {
                "x": "30/05/21",
                "y": 0.118745045
              },
              {
                "x": "06/06/21",
                "y": 0.114474359
              }
            ]
  
          },
          {
            "id": "Samuel Confianza",
            "color": "hsl(25, 100%, 76%)",
            "data": [
                {
                  "x": "07/03/21",
                  "y": 0.095568448
                },
                {
                  "x": "14/03/21",
                  "y": 0.08582421
                },
                {
                  "x": "21/03/21",
                  "y": 0.063913234
                },
                {
                  "x": "28/03/21",
                  "y": 0.058042721
                },
                {
                  "x": "04/04/21",
                  "y": 0.057490953
                },
                {
                  "x": "11/04/21",
                  "y": 0.089916762
                },
                {
                  "x": "18/04/21",
                  "y": 0.070587612
                },
                {
                  "x": "25/04/21",
                  "y": 0.072958177
                },
                {
                  "x": "02/05/21",
                  "y": 0.082728317
                },
                {
                  "x": "09/05/21",
                  "y": 0.094322474
                },
                {
                  "x": "16/05/21",
                  "y": 0.081724855
                },
                {
                  "x": "23/05/21",
                  "y": 0.096045319
                },
                {
                  "x": "30/05/21",
                  "y": 0.095064507
                },
                {
                  "x": "06/06/21",
                  "y": 0.084255033
                }
            ]
          }
        ];


    const [state, setState] = useState({
      AdrianMiedo: true,
      ClaraMiedo: true,
      FernandoMiedo: true,
      SamuelMiedo: true,
      AdrianConfianza: true,
      ClaraConfianza: true,
      FernandoConfianza: true,
      SamuelConfianza: true,
      data: candidatosBase
    });

    console.log(candidatosBase);
    var result = candidatosBase

    const handleChange = (event) => {
      result= state.data
      var manualId= 0;
      manualId= event.target.id;
      if(event.target.checked == true){
        result[manualId].data = candidatosBase[manualId].data
        setState({ ...state, [event.target.name]: event.target.checked ,data: result});
        console.log(result)
      }
      else if (event.target.checked == false){
        result[manualId].data = []
        setState({ ...state, [event.target.name]: event.target.checked ,data: result});
      }
    };

    return (
        <div className={classes.component}>
            <div className={classes.line}></div>
            <div className={classes.container}>
                <div className={classes.itemsContainer}>
                    <div className={classes.itemContainer}>
                         <div className={classes.titleContainer}>
                            <h2 className={classes.subtitle}><strong>Gráfica de Miedo vs Confianza</strong></h2>
                        </div>
                        <div className={classes.scrollContainer}>
                          <p className={classes.scrollText}>scroll</p>
                          <ArrowRightAltRoundedIcon className={classes.scrollIcon}/>
                        </div>
                        <div className={classes.chartContainer}>
                          <CompoundLine data= {state.data} />
                          {candidatosBase.length  !== 0 && (
                            <></>
                          )}
                        </div>
                        <div className={classes.chartFooterContainer}>
                        <div className={classes.groups}>
                        <div className={classes.formContainer}>
                        <InputLabel component="legend" style={{ color: "white", fontSize: "20px", fontWeight: 'bolder', textAlign: 'center', paddingTop: '10px', paddingRight: '50',toptextAlign: 'center'}}>Miedo</InputLabel>
                        <div className={classes.form}>  
                        <FormGroup>
      <StyledFormControlLabel
        control={
          <CustomAdrianCheckbox
            checked={state.AdrianMiedo}
            onChange={handleChange}
            name="AdrianMiedo"
            id={0}
          />
        }
        labelPlacement="top"
        label ="Adrián"/>
        
        <StyledFormControlLabel
        control={
          <CustomFernandoCheckbox
          checked={state.FernandoMiedo}
          onChange={handleChange}
          name="FernandoMiedo"
          id={2}
          />
        }
        labelPlacement="bottom"
        label="Fernando"/>
        </FormGroup>
        <FormGroup>
        <StyledFormControlLabel
        control={
          <CustomClaraCheckbox
            checked={state.ClaraMiedo}
            onChange={handleChange}
            name="ClaraMiedo"
            id={1}
          />
        }
        labelPlacement="top"
        label="Clara"/>
              <StyledFormControlLabel
        control={
          <CustomSamuelCheckbox
            checked={state.SamuelMiedo}
            onChange={handleChange}
            name="SamuelMiedo"
            id={3}
          />
        }
        labelPlacement="bottom"
        label="Samuel"/>
        </FormGroup>
        </div>
        </div>
        <div className={classes.formContainer}>
                        <InputLabel component="legend" style={{ color: "white", fontSize: "20px", fontWeight: 'bolder', textAlign: 'center', paddingTop: '10px', paddingRight: '50',toptextAlign: 'center'}}>Confianza</InputLabel>
        <div className={classes.form}>
                        <FormGroup>
      <StyledFormControlLabel
        control={
          <CustomAdrianCheckbox2
            checked={state.AdrianConfianza}
            onChange={handleChange}
            name="AdrianConfianza"
            id={4}
          />
        }
        labelPlacement="top"
        label ="Adrián"/>
        
        <StyledFormControlLabel
        control={
          <CustomFernandoCheckbox2
            checked={state.FernandoConfianza}
            onChange={handleChange}
            name="FernandoConfianza"
            id={6}
          />
        }
        labelPlacement="bottom"
        label="Fernando"/>
        </FormGroup>
        <FormGroup>
        <StyledFormControlLabel
        control={
          <CustomClaraCheckbox2
            checked={state.ClaraConfianza}
            onChange={handleChange}
            name="ClaraConfianza"
            id={5}
          />
        }
        labelPlacement="top"
        label="Clara"/>
              <StyledFormControlLabel
        control={
          <CustomSamuelCheckbox2
            checked={state.SamuelConfianza}
            onChange={handleChange}
            name="SamuelConfianza"
            id={7}
          />
        }
        labelPlacement="bottom"
        label="Samuel"/>
        </FormGroup>
        </div>
        </div>
        </div>

                        </div>
                    </div>
                    <div className={classes.itemContainer2}>
                        <h2 className={classes.subtitle}><strong>Analisis Compound Texto Con Checkbox</strong></h2>
                        <h2 className={classes.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra sollicitudin sem nec efficitur. Nullam eu varius lectus. Aliquam orci velit, mattis et ullamcorper tempor, ultrices eu ipsum. Mauris sed nunc aliquet, convallis libero id, pretium tellus. Donec aliquam nibh diam, a euismod turpis semper vitae. Morbi sollicitudin, justo vitae ullamcorper suscipit, libero justo rutrum nunc, vel dictum erat sapien sed nisi. Donec in nibh vitae eros lacinia semper sed sit amet neque. Phasellus ut elit a arcu hendrerit faucibus et at enim. Duis condimentum orci non enim pretium ornare. Aenean mattis semper eleifend. Vivamus et nisl at lacus euismod facilisis. Vivamus auctor tristique odio id maximus. Vivamus tincidunt porta urna id euismod. Maecenas nec vulputate metus.</h2>
                    </div>
                </div>
            </div>
            <div className={classes.lineB}></div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({

    groups:{
        display: 'flex',
        flexDirection: 'row',
    },
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
    formContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'rgba(255,255,255,0.05)',
        padding:'0px',
        borderRadius: '15px',
        flex: '0.5',
        margin: '20px'
    },
    form:{
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '15px',
        flex: '0.5',
        margin: '20px'
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

