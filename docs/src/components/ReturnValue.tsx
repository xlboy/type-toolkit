import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import Table from './common/Table';
import TypeComponent from './common/Type';
import MDXComponents from '@theme/MDXComponents';

export default ReturnValue;

interface ReturnValueProps {
  data: null | {
    type?: string;
    description: string;
  };
}

const columns: ColumnsType<NonNullable<ReturnValueProps['data']>> = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 150,
    render: data => (data ? <TypeComponent data={data} /> : null)
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: data => data
  }
];

function ReturnValue(props: ReturnValueProps): JSX.Element {
  if (!props.data) return null;

  return (
    <Table
      scroll={{ x: 700 }}
      columns={columns}
      dataSource={[props.data]}
      rowKey={record => record.type || record.description || '1'}
      pagination={false}
      size="middle"
      bordered
    />
  );
}
