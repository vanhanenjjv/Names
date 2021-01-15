import React from 'react';

import { Card, Space } from "antd";

import { withSuspense } from "../../../suspense";
import names, { Name } from '../api';

import Input from './Input';
import Result from './Result';


interface SearchProps {
  loading?: boolean;
}

const Search: React.FC<SearchProps> = ({ loading }) => {
  const [filter, setFilter] = React.useState('');

  const match = React.useCallback(
    () => {
      const matches: Name[] = [];

      for (const name of names.read()) {
        const nameLower   = name.name.toLowerCase();
        const filterLower = filter.toLowerCase();

        if (nameLower === filterLower)       return [name];
        if (nameLower.includes(filterLower)) matches.push(name);
      }

      return matches;
    }, 
    [filter]
  );

  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <Space size="large" direction="vertical">
        <Input onChange={setFilter} disabled={loading ?? true} />
        {loading 
          ? <p>Loading...</p>
          : <Result names={match()} />}
      </Space>
    </Card>
  );
};


export default withSuspense({
  Component: () => <Search loading={false} />,
  Fallback:  () => <Search loading />
});

