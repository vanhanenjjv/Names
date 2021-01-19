import React from 'react';

import { Button, Grid, Layout, PageHeader, Space, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import { Names } from './pages';


const { Text } = Typography;

const App: React.FC = () => {
  const screens = Grid.useBreakpoint();

  return (
    <Layout>
      <Layout.Content style={{
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        maxWidth: 960,
        padding: 16
      }}>
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
        <Names />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        <Text type="secondary">git commit</Text>
      </Layout.Footer>
    </Layout>
  );
};


export default App;
