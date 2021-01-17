import React from 'react';

import { Card, Space } from 'antd';

import { SuspenseProps, withSuspense } from '../../../suspense';
import names, { Name } from '../api';

import Input from './Input';
import Result from './Result';
import debounce from '../../../debounce';
import { WordCloud } from '@ant-design/charts';


type SearchProps = SuspenseProps;

const Search: React.FC<SearchProps> = ({ suspended }) => {
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
      <Space style={{ width: '100%' }} size="large" direction="vertical">
        <Input onChange={debounce(setFilter, 250)} disabled={suspended} />
        {suspended
          ? <WordCloud loading data={[]} wordField="name" weightField="amount" />
          : <Result names={match()} />}
      </Space>
    </Card>
  );
};


export default withSuspense(Search);
