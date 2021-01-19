import React from 'react';

import { Card, Divider, Space, Statistic } from 'antd';
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
    <Space size="small" direction="vertical" style={{ width: '600px', height: '100%' }}>
      <Card>
        <Statistic
          title="Total amount of names"
          value={suspended ? undefined : sum()}
          loading={suspended} />
      </Card>
      <Divider />
      <WordCloud
        data={suspended ? [] : names.read()}
        wordField="name"
        weightField="amount"
        colorField="name"
        wordStyle={{ fontFamily: 'Verdana', fontSize: [18, 64] }} />
    </Space>
  );
};

Count.displayName = 'Count';


export default withSuspense(Count);
