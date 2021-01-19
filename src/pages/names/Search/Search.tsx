import React from 'react';

import { Space } from 'antd';

import { SuspenseProps, withSuspense } from '../../../suspense';
import names, { Name } from '../api';
import debounce from '../../../debounce';

import Input from './Input';
import Result from './Result';


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
    <Space
      size="large"
      direction="vertical"
      align="center"
      style={{ width: '100%' }}>
      <Input onChange={debounce(setFilter, 250)} disabled={suspended} />
      {!suspended && filter && <Result names={match()} />}
    </Space>
  );
};


export default withSuspense(Search);
