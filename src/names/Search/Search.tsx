import { Card, Space } from "antd";
import React from 'react';
import { withSuspense } from "../../suspense";
import names from "../api";

import Input from './Input';
import Result from './Result';


interface SearchProps {
  loading?: boolean;
}

const Search: React.FC<SearchProps> = ({ loading }) => {
  const [filter, setFilter] = React.useState('');

  const matches = React.useMemo(
    () => (
      loading 
        ? [] 
        : names.read().filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    ),
    [filter, loading]
  );

  return (
    <Card style={{ width: 400 }}>
      <Space size="large" direction="vertical" style={{ width: '100%' }}>
        <Input onChange={setFilter} disabled={loading ?? false} />
        <Result names={matches} />
      </Space>
    </Card>
  );
};


export default withSuspense({
  Component: () => <Search />,
  Fallback:  () => <Search loading />
});

