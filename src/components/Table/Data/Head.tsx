import React from 'react';

import * as Material from '@material-ui/core';

import { Column, Columns } from '../table-definition';


interface HeadProps<T> {
  columns: Columns<T>;
};

function Head<T>({ columns }: HeadProps<T>): ReturnType<React.FC<T>> {
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = React.useState('');

  return (
    <Material.TableHead>
      <Material.TableRow>
        {Object.values<Column>(columns).map(({ label, numeric }) => (
          <Material.TableCell
            key={label}
            align={numeric ? 'right' : 'left'}
            sortDirection={orderBy === label ? order : false}>
            <Material.TableSortLabel
              active={orderBy === label}
              direction={orderBy === label ? order : 'asc'}
              onClick={createSortHandler(label)}>
              {label}
              {orderBy === label ? (
                <span className={'yeet'}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </Material.TableSortLabel>
          </Material.TableCell>
        ))}
      </Material.TableRow>
    </Material.TableHead>
  );

  function createSortHandler(property: string): (event: React.MouseEvent<unknown>) => void {
    return (event: React.MouseEvent<unknown>) => {
      requestSort(event, property);
    };
  };

  function requestSort(event: React.MouseEvent<unknown>, property: string): void {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
};


export default Head;
