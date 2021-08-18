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

export default function PositivityVsNegativity({ classes }) {
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
    const candidatosBase = [
      {
        "id": "Adrian Positividad",
        "color": "hsl(135, 37%, 48%)",
        "data": [
          {
            "x": "07/03/21",
            "y": 0.18021993
          },
          {
            "x": "14/03/21",
            "y": 0.16071959
          },
          {
            "x": "21/03/21",
            "y": 0.192654069
          },
          {
            "x": "28/03/21",
            "y": 0.147081231
          },
          {
            "x": "04/04/21",
            "y": 0.143882906
          },
          {
            "x": "11/04/21",
            "y": 0.176497823
          },
          {
            "x": "18/04/21",
            "y": 0.127742672
          },
          {
            "x": "25/04/21",
            "y": 0.151204719
          },
          {
            "x": "02/05/21",
            "y": 0.178743682
          },
          {
            "x": "09/05/21",
            "y": 0.127604214
          },
          {
            "x": "16/05/21",
            "y": 0.118481348
          },
          {
            "x": "23/05/21",
            "y": 0.152933667
          },
          {
            "x": "30/05/21",
            "y": 0.166241995
          },
          {
            "x": "06/06/21",
            "y": 0.166764041
          }
        ]
      },
      {
        "id": "Clara Luz Positividad",
        "color": "hsl(8, 76%, 43%)",
        "data": [
          {
            "x": "07/03/21",
            "y": 0.115009582
          },
          {
            "x": "14/03/21",
            "y": 0.13034531
          },
          {
            "x": "21/03/21",
            "y": 0.123635463
          },
          {
            "x": "28/03/21",
            "y": 0.09483575
          },
          {
            "x": "04/04/21",
            "y": 0.096446855
          },
          {
            "x": "11/04/21",
            "y": 0.132875487
          },
          {
            "x": "18/04/21",
            "y": 0.117037554
          },
          {
            "x": "25/04/21",
            "y": 0.112247197
          },
          {
            "x": "02/05/21",
            "y": 0.139223863
          },
          {
            "x": "09/05/21",
            "y": 0.122226559
          },
          {
            "x": "16/05/21",
            "y": 0.118186195
          },
          {
            "x": "23/05/21",
            "y": 0.133411151
          },
          {
            "x": "30/05/21",
            "y": 0.154878991
          },
          {
            "x": "06/06/21",
            "y": 0.14568885
          }
        ]
      },
      {
        "id": "Fernando Positividad",
        "color": "hsl(210, 90%, 34%)",
        "data": [
          {
            "x": "07/03/21",
            "y": 0.146278515
          },
          {
            "x": "14/03/21",
            "y": 0.146861622
          },
          {
            "x": "21/03/21",
            "y": 0.116726973
          },
          {
            "x": "28/03/21",
            "y": 0.137499872
          },
          {
            "x": "04/04/21",
            "y": 0.110121459
          },
          {
            "x": "11/04/21",
            "y": 0.147399329
          },
          {
            "x": "18/04/21",
            "y": 0.157031074
          },
          {
            "x": "25/04/21",
            "y": 0.117067378
          },
          {
            "x": "02/05/21",
            "y": 0.142476037
          },
          {
            "x": "09/05/21",
            "y": 0.148912745
          },
          {
            "x": "16/05/21",
            "y": 0.123930625
          },
          {
            "x": "23/05/21",
            "y": 0.131144952
          },
          {
            "x": "30/05/21",
            "y": 0.15943484
          },
          {
            "x": "06/06/21",
            "y": 0.156291718
          }
        ]
      },
      {
        "id": "Samuel Positividad",
        "color": "hsl(25, 87%, 57%)",
        "data": [
            {
              "x": "07/03/21",
              "y": 0.089752838
            },
            {
              "x": "14/03/21",
              "y": 0.119548342
            },
            {
              "x": "21/03/21",
              "y": 0.119239319
            },
            {
              "x": "28/03/21",
              "y": 0.092867185
            },
            {
              "x": "04/04/21",
              "y": 0.086218241
            },
            {
              "x": "11/04/21",
              "y": 0.091353178
            },
            {
              "x": "18/04/21",
              "y": 0.078577301
            },
            {
              "x": "25/04/21",
              "y": 0.080967134
            },
            {
              "x": "02/05/21",
              "y": 0.080703838
            },
            {
              "x": "09/05/21",
              "y": 0.092664521
            },
            {
              "x": "16/05/21",
              "y": 0.080502141
            },
            {
              "x": "23/05/21",
              "y": 0.100923349
            },
            {
              "x": "30/05/21",
              "y": 0.105017963
            },
            {
              "x": "06/06/21",
              "y": 0.088342737
            }
        ]
      },
      {
        "id": "Adrian Negatividad",
        "color": "hsl(135, 100%, 73%)",
        "data": [
          {
            "x": "07/03/21",
            "y": 0.05410072
          },
          {
            "x": "14/03/21",
            "y": 0.037939041
          },
          {
            "x": "21/03/21",
            "y": 0.03703859
          },
          {
            "x": "28/03/21",
            "y": 0.080043936
          },
          {
            "x": "04/04/21",
            "y": 0.06066339
          },
          {
            "x": "11/04/21",
            "y": 0.052287872
          },
          {
            "x": "18/04/21",
            "y": 0.050290268
          },
          {
            "x": "25/04/21",
            "y": 0.081696177
          },
          {
            "x": "02/05/21",
            "y": 0.0614866
          },
          {
            "x": "09/05/21",
            "y": 0.065849298
          },
          {
            "x": "16/05/21",
            "y": 0.111774495
          },
          {
            "x": "23/05/21",
            "y": 0.071541307
          },
          {
            "x": "30/05/21",
            "y": 0.053585299
          },
          {
            "x": "06/06/21",
            "y": 0.059105144
          }       
        ]
      },
      {
        "id": "Clara Luz Negatividad",
        "color": "hsl(8, 74%, 58%)",
        "data": [
            {
                "x": "07/03/21",
                "y": 0.078215128
              },
              {
                "x": "14/03/21",
                "y": 0.089776532
              },
              {
                "x": "21/03/21",
                "y": 0.10833721
              },
              {
                "x": "28/03/21",
                "y": 0.103536226
              },
              {
                "x": "04/04/21",
                "y": 0.075377982
              },
              {
                "x": "11/04/21",
                "y": 0.08627237
              },
              {
                "x": "18/04/21",
                "y": 0.093320498
              },
              {
                "x": "25/04/21",
                "y": 0.10232958
              },
              {
                "x": "02/05/21",
                "y": 0.099142526
              },
              {
                "x": "09/05/21",
                "y": 0.0644174
              },
              {
                "x": "16/05/21",
                "y": 0.077670902
              },
              {
                "x": "23/05/21",
                "y": 0.07278002
              },
              {
                "x": "30/05/21",
                "y": 0.040960068
              },
              {
                "x": "06/06/21",
                "y": 0.071737212
              }
        ]
      },
      {
        "id": "Fernando Negatividad",
        "color": "hsl(210, 100%, 66%)",
        "data": [
            {
                "x": "07/03/21",
                "y": 0.062945914
              },
              {
                "x": "14/03/21",
                "y": 0.054804463
              },
              {
                "x": "21/03/21",
                "y": 0.05193821
              },
              {
                "x": "28/03/21",
                "y": 0.070980757
              },
              {
                "x": "04/04/21",
                "y": 0.062090809
              },
              {
                "x": "11/04/21",
                "y": 0.065457111
              },
              {
                "x": "18/04/21",
                "y": 0.051765508
              },
              {
                "x": "25/04/21",
                "y": 0.065953458
              },
              {
                "x": "02/05/21",
                "y": 0.060409662
              },
              {
                "x": "09/05/21",
                "y": 0.064896577
              },
              {
                "x": "16/05/21",
                "y": 0.044898785
              },
              {
                "x": "23/05/21",
                "y": 0.068636143
              },
              {
                "x": "30/05/21",
                "y": 0.045917973
              },
              {
                "x": "06/06/21",
                "y": 0.047212523
              }
        ]
      },
      {
        "id": "Samuel",
        "color": "hsl(25, 100%, 76%)",
        "data": [
          {
            "x": "07/03/21",
            "y": 0.077959767
          },
          {
            "x": "14/03/21",
            "y": 0.093517538
          },
          {
            "x": "21/03/21",
            "y": 0.094769824
          },
          {
            "x": "28/03/21",
            "y": 0.092160046
          },
          {
            "x": "04/04/21",
            "y": 0.060883975
          },
          {
            "x": "11/04/21",
            "y": 0.101008077
          },
          {
            "x": "18/04/21",
            "y": 0.068776288
          },
          {
            "x": "25/04/21",
            "y": 0.079517551
          },
          {
            "x": "02/05/21",
            "y": 0.070152395
          },
          {
            "x": "09/05/21",
            "y": 0.076521323
          },
          {
            "x": "16/05/21",
            "y": 0.085680541
          },
          {
            "x": "23/05/21",
            "y": 0.084934741
          },
          {
            "x": "30/05/21",
            "y": 0.082197528
          },
          {
            "x": "06/06/21",
            "y": 0.080523694
          }                
        ]
      }
    ];


    const [state, setState] = useState({
      AdrianPositividad: true,
      ClaraPositividad: true,
      FernandoPositividad: true,
      SamuelPositividad: true,
      AdrianNegatividad: true,
      ClaraNegatividad: true,
      FernandoNegatividad: true,
      SamuelNegatividad: true,
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
                            <h2 className={classes.subtitle}><strong>Análisis de Sentimientos: Positividad y Negatividad por Fecha y por Candidato</strong></h2>
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
                        <InputLabel component="legend" style={{ color: "white", fontSize: "20px", fontWeight: 'bolder', textAlign: 'center', paddingTop: '10px', paddingRight: '50',toptextAlign: 'center'}}>Positividad</InputLabel>
                        <div className={classes.form}>  
                        <FormGroup>
      <StyledFormControlLabel
        control={
          <CustomAdrianCheckbox
            checked={state.AdrianPositividad}
            onChange={handleChange}
            name="AdrianPositividad"
            id={0}
          />
        }
        labelPlacement="top"
        label ="Adrián"/>
        
        <StyledFormControlLabel
        control={
          <CustomFernandoCheckbox
          checked={state.FernandoPositividad}
          onChange={handleChange}
          name="FernandoPositividad"
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
            checked={state.ClaraPositividad}
            onChange={handleChange}
            name="ClaraPositividad"
            id={1}
          />
        }
        labelPlacement="top"
        label="Clara"/>
              <StyledFormControlLabel
        control={
          <CustomSamuelCheckbox
            checked={state.SamuelPositividad}
            onChange={handleChange}
            name="SamuelPositividad"
            id={3}
          />
        }
        labelPlacement="bottom"
        label="Samuel"/>
        </FormGroup>
        </div>
        </div>
        <div className={classes.formContainer}>
                        <InputLabel component="legend" style={{ color: "white", fontSize: "20px", fontWeight: 'bolder', textAlign: 'center', paddingTop: '10px', paddingRight: '50',toptextAlign: 'center'}}>Negatividad</InputLabel>
        <div className={classes.form}>
                        <FormGroup>
      <StyledFormControlLabel
        control={
          <CustomAdrianCheckbox2
            checked={state.AdrianNegatividad}
            onChange={handleChange}
            name="AdrianNegatividad"
            id={4}
          />
        }
        labelPlacement="top"
        label ="Adrián"/>
        
        <StyledFormControlLabel
        control={
          <CustomFernandoCheckbox2
            checked={state.FernandoNegatividad}
            onChange={handleChange}
            name="FernandoNegatividad"
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
            checked={state.ClaraNegatividad}
            onChange={handleChange}
            name="ClaraNegatividad"
            id={5}
          />
        }
        labelPlacement="top"
        label="Clara"/>
              <StyledFormControlLabel
        control={
          <CustomSamuelCheckbox2
            checked={state.SamuelNegatividad}
            onChange={handleChange}
            name="SamuelNegatividad"
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
                        <h2 className={classes.subtitle}><strong>Sobre el Análisis de Sentimientos</strong></h2>
                        <h2 className={classes.description}>El candidato con mayor cantidad de tweets positivos prácticamente durante toda la campaña fue Adrián de la Garza, seguido por Lárrazabal. Samuel García, el candidato ganador, fue quien tuvo menos grados de positividad en los textos que le mencionaron. Por su parte, hubo una trayectoria ascendente en la positividad de Clara Luz Flores. Respecto a la negatividad, los dos candidatos con el puntaje más alto en este rubro fueron Samuel García y Clara Luz. Se observan cambios interesantes que reflejan los eventos relevantes de la campaña como el aumento en el nivel de negatividad de Adrián de la Garza en la última fase de la campaña. Los candidatos con grados menores de negatividad durante la mayor parte de la campaña fueron Fernando Larrázabal y Adrián de la Garza. <br/> Al igual que en el análisis de tópicos, llama la atención que el candidato ganador en la elección tuvo el puntaje más alto de negatividad en la campaña. Y que los candidatos del PAN y el PRI tuvieron los puntajes más altos de positividad. Hay dos explicaciones plausibles a este fenómeno. En primer lugar, lo que sucede en las redes sociales es un microcosmos nacional alejando de la realidad del electorado de Nuevo León. En segundo lugar, quizás el mejor predictor de desempeño electoral de un candidato es la polarización que genera. Opiniones demasiado positivas pueden estar ligadas a un comportamiento atípico y poco orgánico llevado por bots.</h2>
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

