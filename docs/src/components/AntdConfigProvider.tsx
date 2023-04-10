import { ConfigProvider, theme } from 'antd';
import React, { useEffect, useState } from 'react';

export default AntdConfigProvider;

interface AntdConfigProviderProps {
  children: JSX.Element;
}

type Theme = 'dark' | 'light';

const getCurrentTheme = () =>
  document.documentElement.getAttribute('data-theme') as Theme;

function AntdConfigProvider(props: AntdConfigProviderProps): JSX.Element {
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
