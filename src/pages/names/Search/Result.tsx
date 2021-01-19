import React from 'react';

import { Empty, List, Typography } from 'antd';

import { Name } from '../api';
import { WordCloud } from '@ant-design/charts';


interface ResultProps {
  names: Name[];
}

const Result: React.FC<ResultProps> = ({ names }) => {
  if (names.length === 0) return <Empty description="No matches" />;
  if (names.length >= 5)  return <Typography.Paragraph>Too many matches</Typography.Paragraph>;
  if (names.length === 1) return (
    <Typography.Paragraph>Solita has {names[0].amount} employees named {names[0].name}</Typography.Paragraph>
  );

  return (
    <List style={{ width: '100%' }}>
      {names.map(({ name }) => <List.Item key={name}>{name}</List.Item>)}
    </List>
  );
};


export default Result;
