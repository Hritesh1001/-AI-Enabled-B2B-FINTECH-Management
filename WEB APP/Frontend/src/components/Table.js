import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { makeStyles } from '@mui/styles';
import './Table.css';

function createData(
  SIno,
  BusinessCode,
  CustomerNumber,
  ClearDate,
  BusinessYear,
  DocumentId,
  PostingDate,
  DocumentCreateDate,
  DueDate,
  InvoiceCurrency,
  DocumentType,
  PostingId,
  TotalOpenAmount,
  BaselineCreateDate
) {
  return {
    SIno,
    BusinessCode,
    CustomerNumber,
    ClearDate,
    BusinessYear,
    DocumentId,
    PostingDate,
    DocumentCreateDate,
    DueDate,
    InvoiceCurrency,
    DocumentType,
    PostingId,
    TotalOpenAmount,
    BaselineCreateDate,
  };
}

const rows = [
  createData(
    1,
    'A',
    11,
    '2021-03-11',
    '2020-01-01',
    21,
    '2020-06-09',
    '2020-06-09',
    '2020-06-09',
    'USD',
    'RV',
    31,
    41,
    '2020-06-09'
  ),
  createData(
    1,
    'A',
    11,
    '2021-03-09',
    '2020-11-01',
    31,
    '2020-09-09',
    '2020-06-09',
    '2020-06-09',
    'USD',
    'RV',
    31,
    41,
    '2020-06-09'
  ),
  createData(
    1,
    'D',
    14,
    '2021-04-09',
    '2020-01-01',
    21,
    '2020-06-09',
    '2020-06-09',
    '2020-06-09',
    'USD',
    'RV',
    31,
    41,
    '2020-06-09'
  ),
  createData(
    1,
    'A',
    1,
    '2021-03-09',
    '2020-01-01',
    21,
    '2020-06-09',
    '2020-06-09',
    '2020-06-09',
    'USD',
    'RV',
    31,
    41,
    '2020-06-09'
  ),
  createData(
    1,
    'A',
    11,
    '2021-03-09',
    '2020-01-01',
    21,
    '2020-06-09',
    '2020-06-09',
    '2020-06-09',
    'USD',
    'RV',
    31,
    41,
    '2020-06-09'
  ),
  createData(
    1,
    'B',
    11,
    '2021-03-09',
    '2020-01-01',
    21,
    '2020-06-09',
    '2020-06-09',
    '2020-06-09',
    'USD',
    'RV',
    31,
    41,
    '2020-06-09'
  ),
  createData(
    7,
    'A',
    11,
    '2021-03-09',
    '2020-01-01',
    21,
    '2020-06-09',
    '2020-06-09',
    '2020-06-09',
    'USD',
    'RV',
    31,
    41,
    '2020-06-09'
  ),
];

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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'SIno',
    numeric: true,
    disablePadding: true,
    label: 'SI no',
  },
  {
    id: 'BusinessCode',
    numeric: false,
    disablePadding: true,
    label: 'Business Code',
  },
  {
    id: 'CustomerNumber',
    numeric: true,
    disablePadding: true,
    label: 'Customer Number',
  },
  {
    id: 'ClearDate',
    numeric: false,
    disablePadding: true,
    label: 'Clear Date',
  },
  {
    id: 'BusinessYear',
    numeric: false,
    disablePadding: true,
    label: 'Business Year',
  },
  {
    id: 'DocumentId',
    numeric: true,
    disablePadding: true,
    label: 'Document Id',
  },
  {
    id: 'PostingDate',
    numeric: false,
    disablePadding: true,
    label: 'Posting Date',
  },
  {
    id: 'DocumentCreateDate',
    numeric: false,
    disablePadding: true,
    label: 'Document Create Date',
  },
  {
    id: 'DueDate',
    numeric: false,
    disablePadding: true,
    label: 'Due Date',
  },
  {
    id: 'InvoiceCurrency',
    numeric: false,
    disablePadding: true,
    label: 'Invoice Currency',
  },
  {
    id: 'DocumentType',
    numeric: false,
    disablePadding: true,
    label: 'Document Type',
  },
  {
    id: 'PostingId',
    numeric: false,
    disablePadding: true,
    label: 'Posting Id',
  },
  {
    id: 'TotalOpenAmount',
    numeric: true,
    disablePadding: true,
    label: 'Total Open Amount',
  },
  {
    id: 'BaselineCreateDate',
    numeric: true,
    disablePadding: true,
    label: 'Baseline Create Date',
  },
];
const useStyles = makeStyles({
  //   table: {
  //     background: 'purple',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     textAlign: 'center',
  //     fontSize: '24px',
  //   },
  //   tablehead:{
  //       background:'orange',
  //       justifyContent: 'center',
  //     alignItems: 'center',
  //     textAlign: 'center',
  //   },
//   tablebody: {
//     background: 'purple',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   tablerow: {
//     background: 'red',
//   },
//   tablecontainer: {
//     background: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     fontSize: '24px',
//   },
  cols: {
    // background: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '14px',
  },
});

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };


const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            className={classes.cols}
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// const useStyles = makeStyles({
//   //   table: {
//   //     background: 'purple',
//   //     justifyContent: 'center',
//   //     alignItems: 'center',
//   //     textAlign: 'center',
//   //     fontSize: '24px',
//   //   },
//   //   tablehead:{
//   //       background:'orange',
//   //       justifyContent: 'center',
//   //     alignItems: 'center',
//   //     textAlign: 'center',
//   //   },
//   tablebody: {
//     background: 'purple',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   tablerow: {
//     background: 'red',
//   },
//   tablecontainer: {
//     background: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     fontSize: '24px',
//   },
//   cols: {
//     background: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     fontSize: '12px',
//   },
// });

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%' }}>
      <Paper className={classes.table} sx={{ width: '100%', mb: 2 }}>
        <TableContainer className={classes.tablecontainer}>
          <Table className={classes.table}>
            <EnhancedTableHead
              className={classes.tablehead}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody className={classes.tablebody}>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      className={classes.tablerow}
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell className={classes.cols} padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.SIno}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.BusinessCode}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.CustomerNumber}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.ClearDate}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.BusinessYear}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.DocumentId}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.PostingDate}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.DocumentCreateDate}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.DueDate}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.InvoiceCurrency}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.DocumentType}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.PostingId}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.TotalOpenAmount}
                      </TableCell>
                      <TableCell className={classes.cols} align="right">
                        {row.BaselineCreateDate}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          class="table-pagination"
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
