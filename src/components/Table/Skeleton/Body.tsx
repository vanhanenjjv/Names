import React from 'react';

import * as Material from '@material-ui/core';

import { Columns } from '../table-definition';
import Row from './Row';


interface BodyProps<T> {
  columns: Columns<T>;
  page: number;
  rowsPerPage: number;
  rows: number;
}

function Body<T>(props: BodyProps<T>): ReturnType<React.FC<BodyProps<T>>> {
  const start = React.useMemo(() => props.page * props.rowsPerPage, [props.page, props.rowsPerPage]);
  const end   = React.useMemo(() => props.page + 1 * props.rowsPerPage, [props.page, props.rowsPerPage]);

  return (
    <Material.TableBody>
      {Array.from({ length: props.rows }).slice(start, end).map((_, index) => (
        <Row 
          key={index} 
          columns={props.columns} />
      ))}
    </Material.TableBody>
  );
};


export default Body;

