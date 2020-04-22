import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import { HomeContext } from '../../contexts/HomeContext';
import MyResponsiveLine from './LineChart';
import AspectRatioRoundedIcon from '@material-ui/icons/AspectRatioRounded';
import * as colors from '../../constants/colors'

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const EnhancedTableHead =(props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const headCells = [
    { id: 'position', numeric: true, disablePadding: true, label: 'Ranking' },
    { id: 'state', numeric: false, disablePadding: false, label: 'Estado' },
    { id: 'data', numeric: true, disablePadding: false, label: 'Confirmados' }
  ];

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            padding='none'
            className={classes.headerCell}
            key={headCell.id}
            align={ 'right' }
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    padding: '0px',
    height: '30vh',
    width: '300px',
    borderTop: '1px solid white'
  },
  icon: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    color: 'blue',
    cursor: 'pointer',
    color: 'white',
    zIndex: '1'
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  
}));

const EnhancedTableToolbar = (props) => {
  const {  data } = props;
  
  const classes = useToolbarStyles();
  
  return (
    <Toolbar className={classes.root}>
        <AspectRatioRoundedIcon className={classes.icon} />
        <MyResponsiveLine data={data}/>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  data: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    maxWidth: '300px'
  },
  paper: {
    width: '100%'
  },
  table: {
    minWidth: 150,
    backgroundColor: colors.BLACK
  },
  headerCell: {
    backgroundColor: '#222',
    color: '#fafafa',
    '&:hover': {
        backgroundColor: colors.BLACK,
        color: colors.WHITE
    },
    '&:active': {
        backgroundColor: colors.BLACK,
        color: colors.WHITE
    },
    '&:focus': {
        backgroundColor: colors.BLACK,
        color: colors.WHITE
    },

  },
  tableContainer: {
    overflowY: 'scroll',
    height: '58vh',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const EnhancedTable = () => {
  const {rows, dataChart} = React.useContext(HomeContext);
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('ranking');
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    let newSelected = [];
    newSelected = newSelected.concat(name);
    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar data={dataChart} />
        <TableContainer className={classes.tableContainer}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size='small'
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell className={classes.headerCell} padding='none' align="right">{row.position}</TableCell>
                      <TableCell className={classes.headerCell} padding='none' align="right">{row.state}</TableCell>
                      <TableCell className={classes.headerCell} padding='none' align="right">{row.data}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default EnhancedTable;