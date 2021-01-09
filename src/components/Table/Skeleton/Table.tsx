import React from 'react';

import * as Material from '@material-ui/core';

import Head from './Head';
import Body from './Body';
import Footer from './Footer';
import TableDefinition from '../table-definition';


interface TableProps<T> {
  definition:   TableDefinition<T>
  rows:         number;
  page?:        number;
  rowsPerPage?: number;
}

function Table<T>(props: TableProps<T>): ReturnType<React.FC<TableProps<T>>> {
  const [page, setPage]               = React.useState(props.page ?? 0);
  const [rowsPerPage, setRowsPerPage] = React.useState(props.rowsPerPage ?? 10);

  const count = React.useMemo(countRows, [countRows]);

  return (
    <Material.TableContainer>
      <Material.Table>
        <Head columns={props.definition.columns} />
        <Body 
          columns={props.definition.columns} 
          rows={props.rows}
          page={page}
          rowsPerPage={rowsPerPage} />
        <Footer
          rowsPerPage={rowsPerPage}
          count={count}
          page={page}
          onChangePage={changePage}
          onChangeRowsPerPage={changeRowsPerPage} />
      </Material.Table>
    </Material.TableContainer>
  );

  function changePage(newPage: number): void { 
    setPage(newPage);
  }

  function changeRowsPerPage(newRowsPerPage: number): void {
    const firstRowIndex = rowsPerPage * page;
    const newPage       = Math.floor(firstRowIndex / newRowsPerPage);

    setPage(newPage);
    setRowsPerPage(newRowsPerPage);
  }

  function countRows() {
    return props.rows;
  }
}


export default Table;
