import React from 'react';

import { Table as AntdTable } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import { withSuspense } from '../../../suspense';
import names, { Name } from '../api';


const columns: ColumnsType<Name> = [
  { title: 'Name',  dataIndex:  'name',   key: 'name',   sorter: (a, b) => a.name.localeCompare(b.name) },
  { title: 'Amount', dataIndex: 'amount', key: 'amount', sorter: (a, b) => a.amount - b.amount          }
];

interface TableProps {
  loading?: boolean;
}

const Table: React.FC<TableProps> = ({ loading }) => {
  return (
    <AntdTable 
      tableLayout="fixed"
      style={{ height: '100%' }} 
      dataSource={loading ? undefined : names.read()} 
      columns={columns} 
      rowKey={loading ? undefined : record => record.name} />
  );
}


export default withSuspense({
  Component: () => <Table />,
  Fallback:  () => <Table loading />
});
