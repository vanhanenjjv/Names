interface Column {
  numeric: boolean;
  label: string;
}

type Columns<T> = Record<keyof T, Column>;

interface TableDefinition<T> {
  columns: Columns<T>;
}


export default TableDefinition;
export type { Column, Columns };
