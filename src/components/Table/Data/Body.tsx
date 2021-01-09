import React from 'react';

import * as Material from '@material-ui/core';

import { Columns } from '../table-definition';
import Row from './Row';


interface BodyProps<T> {
  columns: Columns<T>;
  rows: T[];
  rowKey: (row: T) => string | number | null | undefined;
}

function Body<T>(props: BodyProps<T>): ReturnType<React.FC<BodyProps<T>>> {
  return (
    <Material.TableBody>
      {props.rows.map(row => (
        <Row 
          key={props.rowKey(row)} 
          columns={props.columns} 
          record={row} />
      ))}
    </Material.TableBody>
  );
};


export default Body;

