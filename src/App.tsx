import React from 'react';

import { Layout, Typography } from 'antd';

import { Names } from './pages';


interface GitHubInfo {
  username: string;
  repository:string;
  commitHash: string;
}

interface AppProps {
  github: GitHubInfo;
}

const App: React.FC<AppProps> = ({ github }) => {
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
        <Typography.Link
          type="secondary"
          rel="noopener"
          target="_blank"
          href={`https://github.com/${github.username}/${github.repository}/commit/${github.commitHash}`}>
          {github.commitHash}
        </Typography.Link>
      </Layout.Footer>
    </Layout>
  );
};


export default App;
