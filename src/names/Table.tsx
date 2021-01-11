import React from 'react';

import { Statistic, Table } from 'antd';

import { withSuspense } from '../suspense';
import names from './api';
import { ColumnsType } from 'antd/lib/table';
import Name from './name';


const columns: ColumnsType<Name> = [
  { title: 'Name',  dataIndex: 'name',    key: 'name',   sorter: (a, b) => a.name.localeCompare(b.name) },
  { title: 'Amount', dataIndex: 'amount', key: 'amount', sorter: (a, b) => a.amount - b.amount          }
];

const Component: React.FC = () => {
  return (
    <Table dataSource={names.read()} columns={columns} rowKey={record => record.name} />
  );
};

const Fallback: React.FC = () => {
  return (
    <Table columns={columns} loading />
  );
};


export default withSuspense({
  Component: () => <Component />,
  Fallback:  () => <Fallback />
});
