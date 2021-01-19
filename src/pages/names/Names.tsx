import React from 'react';

import { Grid, Space, Tabs } from 'antd';

import Count from './Count';
import Search from './Search';
import Table from './Table';


const { TabPane } = Tabs;

interface NamesInnerComponents {
  Count:  typeof Count,
  Search: typeof Search,
  Table:  typeof Table
}

const Names: React.FC & NamesInnerComponents = () => {
  const screens = Grid.useBreakpoint();

  return (
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
  );
};

Names.Count  = Count;
Names.Search = Search;
Names.Table  = Table;


export default Names;
