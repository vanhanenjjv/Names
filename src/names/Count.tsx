import React from 'react';

import { Card, Statistic } from 'antd';

import { withSuspense } from '../suspense';
import names from './api';


const Component: React.FC = () => {
  const sum = names.read().map(name => name.amount).reduce((a, b) => a + b);

  return (
    <Statistic title="Total amount of names" value={sum} />
  );
};

const Fallback: React.FC = () => {
  return (
    <Statistic title="Total amount of names" loading />
  );
};


const Count = withSuspense({
  Component: () => <Component />,
  Fallback:  () => <Fallback />
})


export default () => (
  <Card>
    <Count />
  </Card>
);
