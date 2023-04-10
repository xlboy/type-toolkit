import Table from './common/Table';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import TypeComponent, { type TypeParam } from './common/Type';

export default ParamTable;

interface ParamTableProps {
  data: Array<{
    description: string;
    name: string;
    type?: TypeParam;
    default?: string | undefined;
  }>;
}

const columns: ColumnsType<ParamTableProps['data'][number]> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 150,
    render: data => (data ? <TypeComponent data={data} /> : null)
  },
  {
    title: 'Default',
    dataIndex: 'default',
    key: 'default',
    width: 150,
    render: data => (data ? <TypeComponent data={data} /> : null)
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  }
];

function ParamTable(props: ParamTableProps): JSX.Element {
  return (
    <Table
      scroll={{ x: 700 }}
      columns={columns}
      dataSource={props.data}
      pagination={false}
      size="middle"
      bordered
    />
  );
}
