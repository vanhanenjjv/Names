import React from 'react';

import { GithubOutlined } from '@ant-design/icons';
import { Button, PageHeader } from 'antd';


interface HeaderProps {
  hasSubtitle: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasSubtitle }) => (
  <PageHeader
    ghost={true}
    title="Names"
    subTitle={hasSubtitle ? 'Solita Dev Academy 2021' : null}
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
