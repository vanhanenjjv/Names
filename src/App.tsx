import { Col, Row, Space, Typography } from 'antd';
import { Layout } from 'antd';
import React from 'react';
import Count from './names/Count';
import Search from './names/Search';
import Table from './names/Table';


const App: React.FC = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Content style={{ padding: '32px' }}>
        <Space size="middle" align="center" direction="vertical" style={{ width: '100%' }}>
            <Count />
            <Search />
            <Table />  
        </Space>
      </Layout.Content>
    </Layout>
  );
};


export default App;