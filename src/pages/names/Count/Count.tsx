import React from 'react';

import { Card, Statistic } from 'antd';

import { withSuspense } from '../../../suspense';
import names from '../api';


interface CountProps {
  loading?: boolean;
}

const Count: React.FC<CountProps> = ({ loading }) => {
  const sum = React.useCallback(() => names.read().map(name => name.amount).reduce((a, b) => a + b), []);

  return (
    <Card style={{ width: '100%', height: '100%' }}>
      {loading
        ? <Statistic title="Total amount of names" loading />
        : <Statistic title="Total amount of names" value={sum()} />}
    </Card>
  );
};


export default withSuspense({
  Component: () => <Count />,
  Fallback:  () => <Count loading />
});
