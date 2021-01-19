import React from 'react';

import { Card, Col, Row, Statistic } from 'antd';
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
    <React.Fragment>
      <Row gutter={[16, 16]} justify="center">
        <Col>
          <Card>
            <Statistic
              title="Total amount of names"
              value={suspended ? undefined : sum()}
              loading={suspended} />
          </Card>
        </Col>
        <Col>
          <Card>
            <WordCloud
              style={{ height: 400 }}
              data={suspended ? [] : names.read()}
              wordField="name"
              weightField="amount"
              colorField="name"
              wordStyle={{ fontFamily: 'Verdana', fontSize: [18, 64] }} />
          </Card>

        </Col>
      </Row>
    </React.Fragment>
  );
};

Count.displayName = 'Count';


export default withSuspense(Count);
