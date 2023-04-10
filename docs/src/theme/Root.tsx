import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

interface RootProps {
  children: JSX.Element[];
}

export default function Root(props: RootProps): JSX.Element {
  return (
    <BrowserOnly>
      {() => {
        const AntdConfigProvider = require('../components/AntdConfigProvider').default;

        return <AntdConfigProvider>{props.children}</AntdConfigProvider>;
      }}
    </BrowserOnly>
  );
}
