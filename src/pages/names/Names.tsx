import React from 'react';

import { Grid, Tabs } from 'antd';

import Header from './Header';
import Count from './Count';
import Search from './Search';
import Table from './Table';


const { TabPane } = Tabs;

const Names: React.FC = () => {
  const screens = Grid.useBreakpoint();

  return (
    <React.Fragment>
      <Header hasSubtitle={screens.sm ? true : false} />
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
