import React from 'react';

import { Layout, Typography } from 'antd';

import { Names } from './pages';


const { Text } = Typography;

interface AppProps {
  commitHash: string;
}

const App: React.FC<AppProps> = ({ commitHash }) => {
  console.log(process.env);

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
        <Text type="secondary">{commitHash}</Text>
      </Layout.Footer>
    </Layout>
  );
};


export default App;
