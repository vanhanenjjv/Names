import React from 'react';

import { Table as AntdTable } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import { SuspenseProps, withSuspense } from '../../../suspense';
import names, { Name } from '../api';


const columns: ColumnsType<Name> = [
  { title: 'Name',  dataIndex:  'name',   key: 'name',   sorter: (a, b) => a.name.localeCompare(b.name) },
  { title: 'Amount', dataIndex: 'amount', key: 'amount', sorter: (a, b) => a.amount - b.amount          }
];

type TableProps = SuspenseProps;

const Table: React.FC<TableProps> = ({ suspended }) => {
  return (
    <AntdTable
      tableLayout="fixed"
      dataSource={suspended ? undefined : names.read()}
      columns={columns}
      rowKey={suspended ? undefined : record => record.name} />
  );
};


export default withSuspense(Table);
