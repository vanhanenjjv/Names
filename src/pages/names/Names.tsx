import React from 'react';

import { Col, Row  } from 'antd';

import Count from './Count';
import Search from './Search';
import Table from './Table';


interface NamesInnerComponents {
  Count:  typeof Count,
  Search: typeof Search,
  Table:  typeof Table
}

const Names: React.FC & NamesInnerComponents = () => {
  return (
    <Row style={{ height: '100%' }} gutter={[16, 16]}>
      <Col xs={24} sm={12} style={{}}><Count /></Col>
      <Col xs={24} sm={12} style={{}}><Search /></Col>
      <Col xs={24} sm={24}><Table /></Col>
    </Row>
  );
};

Names.Count  = Count;
Names.Search = Search;
Names.Table  = Table;


export default Names;
