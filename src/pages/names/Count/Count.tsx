import React from 'react';

import { Card, Statistic } from 'antd';
import { WordCloud } from '@ant-design/charts';

import { withSuspense, SuspenseProps } from '../../../suspense';
import names from '../api';


type CountProps = SuspenseProps;

const Count: React.FC<CountProps> = ({ suspended }) => {
  const sum = React.useCallback(() =>
    names.read()
      .map(name => name.amount)
      .reduce((a, b) => a + b), []);

  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <Statistic
        title="Total amount of names"
        value={suspended ? undefined : sum()}
        loading={suspended} />
      <WordCloud
        data={suspended ? [] : names.read()}
        wordField="name"
        weightField="amount"
        color="#122c6a"
        wordStyle={{ fontFamily: 'Verdana', fontSize: [24, 80] }} />
    </Card>
  );
};

Count.displayName = 'Count';


export default withSuspense(Count);
