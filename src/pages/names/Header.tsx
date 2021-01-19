import React from 'react';

import { GithubOutlined } from '@ant-design/icons';
import { Button, PageHeader } from 'antd';


const Header: React.FC = () => (
  <PageHeader
    ghost={true}
    title="Names"
    subTitle="Solita Dev Academy 2021"
    extra={[
      <Button
        key="GitHub"
        shape="circle"
        size="large"
        rel="noopener"
        href="https://www.github.com/vanhanenjjv/names"
        target="_blank">
        <GithubOutlined />
      </Button>
    ]} />
);

export default Header;
