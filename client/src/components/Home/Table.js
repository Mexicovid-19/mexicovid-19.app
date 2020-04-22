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
import { MapContext } from '../../contexts/MapContext';
import MyResponsiveLine from './LineChart';

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
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    padding: '0px',
    height: '30vh',
    width: '300px'
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
  const classes = useToolbarStyles();
  const data = [
    {
      "id": "germany",
      "data": [
        {
          "x": "plane",
          "y": 200
        },
        {
          "x": "helicopter",
          "y": 105
        },
        {
          "x": "boat",
          "y": 30
        },
        {
          "x": "train",
          "y": 191
        },
        {
          "x": "subway",
          "y": 49
        },
        {
          "x": "bus",
          "y": 265
        },
        {
          "x": "car",
          "y": 130
        },
        {
          "x": "moto",
          "y": 202
        },
        {
          "x": "bicycle",
          "y": 11
        },
        {
          "x": "horse",
          "y": 109
        },
        {
          "x": "skateboard",
          "y": 120
        },
        {
          "x": "others",
          "y": 211
        }
      ]
    },
    {
      "id": "norway",
      "data": [
        {
          "x": "plane",
          "y": 60
        },
        {
          "x": "helicopter",
          "y": 89
        },
        {
          "x": "boat",
          "y": 52
        },
        {
          "x": "train",
          "y": 71
        },
        {
          "x": "subway",
          "y": 37
        },
        {
          "x": "bus",
          "y": 220
        },
        {
          "x": "car",
          "y": 71
        },
        {
          "x": "moto",
          "y": 88
        },
        {
          "x": "bicycle",
          "y": 245
        },
        {
          "x": "horse",
          "y": 76
        },
        {
          "x": "skateboard",
          "y": 300
        },
        {
          "x": "others",
          "y": 82
        }
      ]
    }
  ];
  return (
    <Toolbar className={classes.root}>
        <MyResponsiveLine data={data}/>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
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
  },
  tableContainer: {
    overflowY: 'scroll',
    height: '78vh',
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
  const {rows} = React.useContext(MapContext);
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
        <EnhancedTableToolbar numSelected={selected.length} />
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
                      <TableCell padding='none' align="right">{row.position}</TableCell>
                      <TableCell padding='none' align="right">{row.state}</TableCell>
                      <TableCell padding='none' align="right">{row.data}</TableCell>
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