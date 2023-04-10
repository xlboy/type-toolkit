import { ConfigProvider, theme } from 'antd';
import React, { useEffect, useState } from 'react';

interface RootProps {
  children: JSX.Element[];
}

type Theme = 'dark' | 'light';

const getCurrentTheme = () =>
  document.documentElement.getAttribute('data-theme') as Theme;
export default function Root(props: RootProps): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getCurrentTheme());

  useEffect(() => {
    const observer = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          setCurrentTheme(getCurrentTheme());
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return observer.disconnect;
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      {props.children}
    </ConfigProvider>
  );
}
