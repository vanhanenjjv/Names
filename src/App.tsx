import React from 'react';

import { Layout, Typography } from 'antd';

import { Names } from './pages';


const { Text } = Typography;

const App: React.FC = () => {
  return (
    <Layout>
      <Layout.Content style={{
        width: '100%',
        alignSelf: 'center',
        maxWidth: 960,
        padding: '0 16px'
      }}>
        <Names />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        <Text type="secondary">git commit</Text>
      </Layout.Footer>
    </Layout>
  );
};


export default App;
