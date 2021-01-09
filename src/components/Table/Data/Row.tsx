import React from "react";

import * as Material from "@material-ui/core"

import { Column, Columns } from "../table-definition";
import Cell from "./Cell";


interface RowProps<T> {
  columns: Columns<T>;
  record: T;
}

function Row<T>(props: RowProps<T>): ReturnType<React.FC<RowProps<T>>> {
  const columns = Object.values<Column>(props.columns);
  const fields  = Object.values(props.record);

  return (
    <Material.TableRow>
      {fields.map((field, index) => (
        <Cell 
          key={index} 
          numeric={columns[index].numeric}>
          {field}
        </Cell>
      ))}
    </Material.TableRow>
  );
};


export default Row;
