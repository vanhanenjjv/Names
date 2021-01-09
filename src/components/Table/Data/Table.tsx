import React from 'react';

import * as Material from '@material-ui/core';

import Head from './Head';
import Body from './Body';
import Footer from './Footer';
import Definition from '../table-definition';


interface TableProps<T> {
  definition: Definition<T>
  rows: T[];
  page?: number;
  rowsPerPage?: number;
  rowKey: (record: T) => string | number | null | undefined;
}

function Table<T>(props: TableProps<T>): ReturnType<React.FC<TableProps<T>>> {
  const [page, setPage]               = React.useState(props.page ?? 0);
  const [rowsPerPage, setRowsPerPage] = React.useState(props.rowsPerPage ?? 10);

  const count = React.useMemo(countRows, [countRows]);
  const rows =  React.useMemo(sliceRows, [sliceRows]);

  return (
    <Material.TableContainer>
      <Material.Table>
        <Head columns={props.definition.columns} />
        <Body 
          columns={props.definition.columns} 
          rows={rows} 
          rowKey={props.rowKey} />
        <Footer
          rowsPerPage={rowsPerPage}
          count={count}
          page={page}
          onChangePage={setPage}
          onChangeRowsPerPage={setRowsPerPage} />
      </Material.Table>
    </Material.TableContainer>
  );

  function countRows() {
    return props.rows.length;
  }

  function sliceRows() {
    const start = page * rowsPerPage;
    const end   = (page + 1) * rowsPerPage;

    return props.rows.slice(start, end);
  }
}


export default Table;
