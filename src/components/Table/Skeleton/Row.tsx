import React from "react";

import * as Material from "@material-ui/core"
import * as MaterialLab from '@material-ui/lab';

import { Column, Columns } from "../table-definition";
import Cell from "./Cell";


interface RowProps<T> {
  columns: Columns<T>;
}

function Row<T>(props: RowProps<T>): ReturnType<React.FC<RowProps<T>>> {
  const columns = Object.values<Column>(props.columns);

  return (
    <Material.TableRow>
      {Array.from({ length: columns.length }).map((_, index) => (
        <Cell 
          key={index} 
          numeric={columns[index].numeric}>
          <MaterialLab.Skeleton />
        </Cell>
      ))}
    </Material.TableRow>
  );
};


export default Row;
