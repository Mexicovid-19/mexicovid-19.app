import React, { useEffect, useState } from 'react'

/* Material UI */
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import {InputLabel} from '@material-ui/core';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Utils
import * as colors from '../../../constants/colors';
import CompoundLine from './CompoundLine.js';


export default function CompoundPonderado({classes}){
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
    const CustomClaraCheckbox = withStyles({
        root: {
          color: "#C1311B",
          '&$checked': {
            color: "#C1311B",
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
    const CustomFernandoCheckbox = withStyles({
        root: {
          color: "#0958A5",
          '&$checked': {
            color: "#0958A5",
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);
  const candidatosBase = [
        {
        "id": "Adrian",
        "color": "hsl(135, 37%, 48%)",
        "data": [
          {
            "x": "01/03/21",
            "y": 0.09238135194434838
          },
          {
            "x": "07/03/21",
            "y": 0.3314491721758727
          },
          {
            "x": "14/03/21",
            "y": 0.03165840074393304
          },
          {
            "x": "21/03/21",
            "y": -0.14610555948885567
          },
          {
            "x": "28/03/21",
            "y": 0.00564172662781058
          },
          {
            "x": "04/04/21",
            "y": -0.06918280339345449
          },
          {
            "x": "11/04/21",
            "y": 0.022679184787980627
          },
          {
            "x": "18/04/21",
            "y": 0.019046353906746465
          },
          {
            "x": "25/04/21",
            "y": 0.027534125249006183
          },
          {
            "x": "02/05/21",
            "y": -0.05483111756428278
          },
          {
            "x": "09/05/21",
            "y": -0.0534362453889572
          },
          {
            "x": "16/05/21",
            "y": 0.05705045748008357
          },
          {
            "x": "23/05/21",
            "y": 0.18862073130053714
          },
          {
            "x": "30/05/21",
            "y": 0.28796773591319935
          }       
        ]
      },
      {
        "id": "Clara Luz",
        "color": "hsl(8, 76%, 43%)",
        "data": [
          {
            "x": "01/03/21",
            "y": 0.035404575855459794
          },
          {
            "x": "07/03/21",
            "y": 0.33992854806704653
          },
          {
            "x": "14/03/21",
            "y": -0.10865681768787537
          },
          {
            "x": "21/03/21",
            "y": -0.1670244612248561
          },
          {
            "x": "28/03/21",
            "y": -0.019710945159575246
          },
          {
            "x": "04/04/21",
            "y": 0.11933264959683124
          },
          {
            "x": "11/04/21",
            "y": 0.2542916755111233
          },
          {
            "x": "18/04/21",
            "y": -0.007058823529411765
          },
          {
            "x": "25/04/21",
            "y": -0.011784096247402323
          },
          {
            "x": "02/05/21",
            "y": 0.139591321925483
          },
          {
            "x": "09/05/21",
            "y": 0.0941749330814045
          },
          {
            "x": "16/05/21",
            "y": 0.07730728515061111
          },
          {
            "x": "23/05/21",
            "y": 0.2800889421560588
          },
          {
            "x": "30/05/21",
            "y": 0.18968238092062856
          }
        ]
      },
      {
        "id": "Fernando",
        "color": "hsl(210, 90%, 34%)",
        "data": [
          {
            "x": "01/03/21",
            "y": 0.47282406291760687
          },
          {
            "x": "07/03/21",
            "y": 0.2217953195948306
          },
          {
            "x": "14/03/21",
            "y": 0.002231669938840944
          },
          {
            "x": "21/03/21",
            "y": 0.0384310618066561
          },
          {
            "x": "28/03/21",
            "y": 0.39097744360902253
          },
          {
            "x": "04/04/21",
            "y": 0.1877725026644705
          },
          {
            "x": "11/04/21",
            "y": 0.4383437908285885
          },
          {
            "x": "18/04/21",
            "y": 0.06364620199479365
          },
          {
            "x": "25/04/21",
            "y": 0.03518049398353388
          },
          {
            "x": "02/05/21",
            "y": -0.19651801461325272
          },
          {
            "x": "09/05/21",
            "y": -0.025772394462792985
          },
          {
            "x": "16/05/21",
            "y": 0.02378971124538626
          },
          {
            "x": "23/05/21",
            "y": 0.22023500732823967
          },
          {
            "x": "30/05/21",
            "y": 0.5526565729929046
          }
        ]
      },
      {
        "id": "Samuel",
        "color": "hsl(25, 87%, 57%)",
        "data": [
          {
            "x": "01/03/21",
            "y": 0.03701015965166909
          },
          {
            "x": "07/03/21",
            "y": 0.2794556241737609
          },
          {
            "x": "14/03/21",
            "y": 0.08295498052984956
          },
          {
            "x": "21/03/21",
            "y": -0.02034450936873737
          },
          {
            "x": "28/03/21",
            "y": 0.04943914164286212
          },
          {
            "x": "04/04/21",
            "y": -0.12915129151291513
          },
          {
            "x": "11/04/21",
            "y": -0.14184735297310297
          },
          {
            "x": "18/04/21",
            "y": 0.01002945501015773
          },
          {
            "x": "25/04/21",
            "y": 0.04551309746691629
          },
          {
            "x": "02/05/21",
            "y": -0.1014398144766635
          },
          {
            "x": "09/05/21",
            "y": -0.09982056734643754
          },
          {
            "x": "16/05/21",
            "y": 0.14586894288141103
          },
          {
            "x": "23/05/21",
            "y": 0.05125500758210171
          },
          {
            "x": "30/05/21",
            "y": 0.1504283906751637
          }            
        ]
      }
  ];

  const [state, setState] = useState({
    Adrian: true,
    Clara: true,
    Fernando: true,
    Samuel: true,
    data: candidatosBase
  });

  var result = candidatosBase

  const handleChange = (event) => {
    result = state.data
    var manualId= 0;
    manualId = event.target.id;
    if(event.target.checked === true){
      result[manualId].data = candidatosBase[manualId].data
      setState({ ...state, [event.target.name]: event.target.checked, data: result});
      console.log(result)
    }
    else if (event.target.checked === false){
      result[manualId].data = []
      setState({ ...state, [event.target.name]: event.target.checked, data: result});
    }
  };
  return (
    <div className={classes.component}>
    <div className={classes.line}></div>
    <div className={classes.container}>
        <div className={classes.itemsContainer}>
            <div className={classes.itemContainer}>
                 <div className={classes.titleContainer}>
                    <h2 className={classes.subtitle}><strong>Analisis Compound Gráfica (Ponderado)</strong></h2>
                </div>
                <div className={classes.scrollContainer}>
                  <p className={classes.scrollText}>scroll</p>
                  <ArrowRightAltRoundedIcon className={classes.scrollIcon}/>
                </div>
                <div className={classes.chartContainer}>
                <CompoundLine data= {state.data} />
                </div>
                <div className={classes.chartFooterContainer}>
                <div className={classes.groups}>
                <div className={classes.formContainer}>
                <InputLabel component="legend" style={{ color: "white", fontSize: "20px", fontWeight: 'bolder', textAlign: 'center', paddingTop: '10px', paddingRight: '50',toptextAlign: 'center'}}>Candidatos</InputLabel>
                <div className={classes.form}>  
                <FormGroup>
                  <StyledFormControlLabel
                  control={
                    <CustomAdrianCheckbox
                      checked={state.Adrian}
                      onChange={handleChange}
                      name="Adrian"
                      id={0}
                    />
                  }
                  labelPlacement="top"
                  label ="Adrián"/>

                  <StyledFormControlLabel
                  control={
                    <CustomFernandoCheckbox
                    checked={state.Fernando}
                    onChange={handleChange}
                    name="Fernando"
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
                      checked={state.Clara}
                      onChange={handleChange}
                      name="Clara"
                      id={1}
                    />
                  }
                  labelPlacement="top"
                  label="Clara"/>
                        <StyledFormControlLabel
                  control={
                    <CustomSamuelCheckbox
                      checked={state.Samuel}
                      onChange={handleChange}
                      name="Samuel"
                      id={3}
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
