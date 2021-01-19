import React from 'react';

import { Card, Empty, List, Space, Typography } from 'antd';

import { Name } from '../api';


interface ResultProps {
  names: Name[];
}

const Result: React.FC<ResultProps> = ({ names }) => {
  if (names.length === 0) return (
    <Card>
      <Empty description="No matches" />
    </Card>
  );

  if (names.length > 1) return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {names.map(({ name }) => (
        <Card key={name}>
          <Typography.Text>{name}</Typography.Text>
        </Card>
      ))}
    </Space>
  );

  return (
    <Card>
      <Typography.Text>
      Solita has {names[0].amount} employees named {names[0].name}
      </Typography.Text>
    </Card>
  );
};


export default Result;
