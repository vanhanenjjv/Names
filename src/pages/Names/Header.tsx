import React from 'react';

import { GithubOutlined } from '@ant-design/icons';
import { Button, PageHeader, Typography } from 'antd';


interface HeaderProps {
  hasSubtitle: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasSubtitle }) => (
  <PageHeader
    ghost={true}
    title="Names"
    style={{ paddingRight: 0 }}
    subTitle={
      <Typography.Link
        type="secondary"
        href="https://github.com/solita/dev-academy-2021"
        target="_blank">
        {hasSubtitle ? 'Solita Dev Academy 2021' : null}
      </Typography.Link>
    }
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
