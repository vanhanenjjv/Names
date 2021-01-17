import React from 'react';

import { Layout } from 'antd';

import { Names } from './pages';


const App: React.FC = () => {
  return (
    <Layout style={{ display: 'grid', justifyContent: 'center', height: '100%' }}>
      <Layout.Content style={{ maxWidth: 960, margin: 16 }}>
        <Names />
      </Layout.Content>
    </Layout>
  );
};


export default App;
