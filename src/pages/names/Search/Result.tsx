import React from 'react';

import { Empty, List, Typography } from 'antd';

import { Name } from '../api';


interface ResultProps {
  names: Name[];
}

const Result: React.FC<ResultProps> = ({ names }) => {
  if (names.length === 0) return <Empty description="No matches" />;
  if (names.length === 1) return (
    <Typography.Paragraph>Solita has {names[0].amount} employees named {names[0].name}</Typography.Paragraph>
  );

  return (
    <List
      bordered
      style={{ width: '100%' }}
      dataSource={names}
      rowKey="name"
      renderItem={({ name }) => <List.Item key={name}>{name}</List.Item>} />
  );
};


export default Result;
