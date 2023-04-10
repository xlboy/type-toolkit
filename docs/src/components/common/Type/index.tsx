import CodeBlock from '@theme/CodeBlock';
import { Popover } from 'antd';
import React from 'react';
import './index.css';

export default Type;

interface TypeProps {
  data: TypeParam;
}
export type TypeParam =
  | string
  | {
      name: string;
      code: string;
      link: string;
    };

function Type(props: TypeProps): JSX.Element {
  const { data } = props;

  if (typeof data === 'string') return <span style={{ color: '#851dc4' }}>{data}</span>;

  const popoverContent = (
    <>
      <CodeBlock className="language-typescript">{data.code.trim()}</CodeBlock>
    </>
  );
  return (
    <Popover content={popoverContent} rootClassName="type-popover">
      <a href={data.link} target="_blank" style={{ color: '#2360d1' }}>
        {data.name}
      </a>
    </Popover>
  );
}
