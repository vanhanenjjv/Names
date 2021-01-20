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
      <Header hasSubtitle={screens.md ? true : false} />
      <Tabs  tabPosition={screens.md ? 'left' : 'top'}>
        <TabPane tab="Table" key="1">
          <Table />
        </TabPane>
        <TabPane tab="Search" key="2">
          <Search />
        </TabPane>
        <TabPane tab="Count" key="3">
          <Count colSpan={screens.md ? undefined : 24} />
        </TabPane>
      </Tabs>
    </React.Fragment>
  );
};


export default Names;
