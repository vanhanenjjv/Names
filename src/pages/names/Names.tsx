import React from 'react';

import { Button, Grid, PageHeader, Tabs } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import Count from './Count';
import Search from './Search';
import Table from './Table';


const { TabPane } = Tabs;

const Names: React.FC = () => {
  const screens = Grid.useBreakpoint();

  return (
    <React.Fragment>
      <PageHeader
        ghost={true}
        title="Names"
        subTitle={screens.sm ? 'Solita Dev Academy 2021' : null}
        extra={[
          <Button
            key="GitHub"
            shape="circle"
            size="large"
            href="https://www.github.com/vanhanenjjv/names"
            target="_blank">
            <GithubOutlined />
          </Button>
        ]} />

      <Tabs tabPosition={screens.md ? 'left' : 'top'}>
        <TabPane tab="Count" key="1">
          <Count />
        </TabPane>
        <TabPane tab="Search" key="2">
          <Search />
        </TabPane>
        <TabPane tab="Table" key="3">
          <Table />
        </TabPane>
      </Tabs>
    </React.Fragment>
  );
};


export default Names;
