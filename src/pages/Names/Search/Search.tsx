import React from 'react';

import { AutoComplete, Card, Col, Row, Space, Typography } from 'antd';

import { SuspenseProps, withSuspense } from '../../../suspense';
import names, { Name } from '../api';


type SearchProps = SuspenseProps;

const Search: React.FC<SearchProps> = ({ suspended }) => {
  const [filter, setFilter] = React.useState('');
  const [selected, setSelected] = React.useState<Name>();

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
    <Row justify="center">
      <Col flex="auto" />
      <Col flex="500px">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <AutoComplete
            style={{ width: '100%' }}
            disabled={suspended}
            filterOption
            options={suspended ? undefined : names.read().map(({ name }) => ({ value: name }))}
            notFoundContent="No matches"
            onSelect={select}
            onSearch={search}
            placeholder="Search by name"
            allowClear
            onClear={clear} />
          {!suspended && selected && (
            <Card>
              <Typography.Text>
                Solita has {selected.amount} employee{selected.amount === 1 ? '' : 's'} named {selected.name}
              </Typography.Text>
            </Card>
          )}
        </Space>
      </Col>
      <Col flex="auto" />
    </Row>

  );

  function search(value: string): void {
    setSelected(undefined);
    setFilter(value);
  }

  function clear(): void {
    setSelected(undefined);
  }

  function select(name: string): void {
    setSelected(
      match().find((match) => match.name.toLowerCase() === name.toLowerCase())
    );
  }
};


export default withSuspense(Search);
