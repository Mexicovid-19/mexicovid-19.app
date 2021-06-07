import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./tabla.css"
import * as colors from '../../constants/colors';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
    textAlign: 'center',
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      //backgroundColor: '#d9dbe2',
      backgroundColor: colors.BLACK,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(<img className="foto" src='./img/elecciones/partidos/PAN.png'/>, 'Fernando Alejandro Larrazabal Brenton', '18.27%'),
  createData(<img className="foto" src='./img/elecciones/partidos/MC.png'/>, 'Samuel Alejandro García Sepúlveda', '36.68%'),
  createData(<img className="foto" src='./img/elecciones/partidos/PES.png'/>, 'Carolina María Garza Guerra', '0.32%'),
  createData(<img className="foto" src='./img/elecciones/partidos/RSP.png'/>, 'Virginia Daney Siller Tristán', '0.30%'),
  createData(<img className="foto" src='./img/elecciones/partidos/FXM.png'/>, 'Emilio Jacques Rivera', '0.63%'),
  createData(<img className="foto" src='./img/elecciones/partidos/priprd.png'/>, 'Adrián Emilio de la Garza Santos', '27.96%'),
  createData(<img className="foto" src='./img/elecciones/partidos/JHHNL.png'/>, 'Clara Luz Flores Carrales', '14.02%'),
];

const useStyles = makeStyles({
  table: {
    minWidth: '50%',
    maxWidth: 50,
    minHeight: '50%',
    maxHeight: 100,
    margin: 'auto',
    
    //minWidth: 200,
    },
  fondo:{
    backgroundColor: colors.BLACK,
  }
});

//Table className={classes.table}

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.fondo} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead class="shadow">
          <TableRow>
            <StyledTableCell align ="center">PARTIDO</StyledTableCell>
            <StyledTableCell align="center">CANDIDATO</StyledTableCell>
            <StyledTableCell align="center">PORCENTAJE PREP</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody class="shadow">
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}