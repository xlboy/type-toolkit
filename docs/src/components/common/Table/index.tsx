import React from 'react';

import { type TableProps as AntdTableProps, Table as AntdTable } from 'antd';

import './index.css';

export default Table;

function Table<T extends object>(props: AntdTableProps<T>): JSX.Element {
  return <AntdTable className="custom-table" {...props} />;
}
