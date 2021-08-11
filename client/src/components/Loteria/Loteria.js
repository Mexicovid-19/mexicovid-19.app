import React, { useState, useEffect } from "react";
/* Material UI */
import { withStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
/* Utils */
import * as colors from "../../constants/colors";
import estadosMexicanos from "./estados/estados.json";
/* Components */
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import SimplePopper from "./PopperCard";
import BackTo from "./BackTo";
import ForwardTo from "./ForwardTo";
import NationalGraph from "./NationalGraph";
import { casos as casosBase, muertes as muertesBase } from "./Data";
import * as d3 from "d3";
import csv from "./estados/estados_casos.csv";

const LoteriaPag = ({ classes }) => {
  const [casos, setCasos] = useState(casosBase);
  const [muertes, setMuertes] = useState(muertesBase);

  const [graphData, setGraphData] = useState({
    checkedA: true,
    nationalData: [casos[0]],
    tipoDatos: "Casos Nacionales Activos",
  });

  useEffect(() => {
    const casosTemp = casos;
    const muertesTemp = muertes;
    d3.csv(csv, (data) => {
      if (isNaN(data["ESTADO"]) || isNaN(parseFloat(data["ESTADO"]))) {
        return;
      }

      const estado = parseInt(data["ESTADO"]);
      if (estado < 0 || estado > 32) {
        return;
      }

      if (!data["FECHA_DOMINGO"].includes("2020")) {
        casosTemp[estado - 1].data.push({
          x: data["FECHA_DOMINGO"],
          y: +data["CONFIRMADOS"],
        });
        muertesTemp[estado - 1].data.push({
          x: data["FECHA_DOMINGO"],
          y: +data["DECESOS"],
        });
      }
    });

    setCasos(casosTemp);
    setMuertes(muertesTemp);
  }, []);

  const handleChange = (event) => {
    if (event.target.checked === true) {
      setGraphData({
        checkedA: true,
        nationalData: [casos[0]],
        tipoDatos: "Casos Nacionales Activos",
      });
    } else {
      setGraphData({
        checkedA: false,
        nationalData: [muertes[0]],
        tipoDatos: "Defunciones Nacionales",
      });
    }
  };

  const [indexButton, setIndexButton] = useState({
    index: 1,
    carta1: 1,
    carta2: 2,
    carta3: 3,
    carta4: 4,
    carta5: 5,
    carta6: 6,
    carta7: 7,
    carta8: 8,
    carta9: 9,
  });

  const handleChangeBack = () => {
    var guia = indexButton.index;
    if (1 < guia) {
      setIndexButton({
        index: indexButton.index - 1,
        carta1: indexButton.carta1 - 9,
        carta2: indexButton.carta2 - 9,
        carta3: indexButton.carta3 - 9,
        carta4: indexButton.carta4 - 9,
        carta5: indexButton.carta5 - 9,
        carta6: indexButton.carta6 - 9,
        carta7: indexButton.carta7 - 9,
        carta8: indexButton.carta8 - 9,
        carta9: indexButton.carta9 - 9,
      });
    }
  };

  const handleChangeFW = () => {
    var guia = indexButton.index;
    if (guia < 4) {
      setIndexButton({
        index: indexButton.index + 1,
        carta1: indexButton.carta1 + 9,
        carta2: indexButton.carta2 + 9,
        carta3: indexButton.carta3 + 9,
        carta4: indexButton.carta4 + 9,
        carta5: indexButton.carta5 + 9,
        carta6: indexButton.carta6 + 9,
        carta7: indexButton.carta7 + 9,
        carta8: indexButton.carta8 + 9,
        carta9: indexButton.carta9 + 9,
      });
    }
  };

  document.title = "Loteria | MexiCOVID";
  return (
    <div className="container">
      <div className={classes.pagina}>
        <div className={classes.tablero}>
          <div className={classes.fila}>
            <SimplePopper index={indexButton.carta1} />
            <SimplePopper index={indexButton.carta2} />
            <SimplePopper index={indexButton.carta3} />
          </div>
          <div className={classes.fila}>
            <SimplePopper index={indexButton.carta4} />
            <SimplePopper index={indexButton.carta5} />
            <SimplePopper index={indexButton.carta6} />
          </div>
          <div className={classes.fila} style={{ height: "260" }}>
            <SimplePopper index={indexButton.carta7} />
            <SimplePopper index={indexButton.carta8} />
            <SimplePopper index={indexButton.carta9} />
          </div>
          <div className={classes.fila} style={{ height: "260" }}>
            <div className={classes.control}>
              <BackTo onClick1={handleChangeBack} index={indexButton.index} />
              <div className={classes.controlTexto}>
                <Typography>{indexButton.index}/4</Typography>
              </div>
              <ForwardTo
                onClick1={handleChangeFW}
                index={indexButton.index}
                style={{ fill: "#fafafa" }}
              />
            </div>
          </div>
        </div>
        <div className={classes.grafica}>
          <div className={classes.titleContainer}>
            <h2 className={classes.subtitle}>
              <strong> {graphData.tipoDatos} Gráfica</strong>
            </h2>
          </div>
          <NationalGraph data={graphData.nationalData} />
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={graphData.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label={graphData.tipoDatos}
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

const styles = () => ({
  container: {
    background: colors.BLACK,
    overflow: "hidden",
  },
  grafica: {
    marginTop: "25px",
    width: "60%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fafafa",
  },
  subtitle: {
    marginBottom: "5px",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.WHITE,
    flex: 1,
  },
  margin: {
    margin: 1,
  },
  control: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: 15,
    height: 40,
    width: "75%",
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: colors.WHITE,
    fontSize: "35px",
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "center",
  },
  controlTexto: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  barContainer: {
    backgroundColor: colors.BLACK,
    color: colors.WHITE,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid white",
  },
  h1: {
    fontSize: "35px",
    textAlign: "center",
    fontWeight: "bold",
    margin: "0",
  },
  h2: {
    fontSize: "20",
    textAlign: "center",
    fontWeight: "bold",
    margin: "0",
    color: colors.WHITE,
  },
  /* Desktop */
  pagina: {
    backgroundColor: colors.BLACK,
    paddingTop: "20px",
    display: "flex",
    maxWidth: "95%",
    height: "100vh",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tablero: {
    display: "flex",
    flexDirection: "column",
    width: "30vw",
    height: 840,
  },
  fila: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 260,
  },
  header: {
    padding: "20px",
  },
  legend: {
    fontSize: 40,
    fontWeight: "bold",
    paddingTop: "0px",
    paddingLeft: "520px",
    paddingBottom: "0px",
    position: "relative",
    top: "+135px",
    //borderLeft: '1px solid white',
    //borderRight: '1px solid white',
  },
  legend2: {
    fontSize: 40,
    fontWeight: "bold",
    paddingTop: "0px",
    paddingLeft: "1090px",
    paddingRight: "0px",
    paddingBottom: "0px",
    position: "relative",
    top: "-210px",
    //borderLeft: '1px solid white',
    //borderRight: '1px solid white',
  },

  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    barContainer: {
      backgroundColor: colors.BLACK,
      color: colors.WHITE,
      display: "block",
      border: "1px solid white",
    },
    h1: {
      fontSize: "25px",
    },
  },
});

export default withStyles(styles)(LoteriaPag);
