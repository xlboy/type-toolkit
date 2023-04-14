import { LoadingOutlined } from '@ant-design/icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import source from '@site/static/source.json';
import { useSetState } from 'ahooks';
import { Segmented, SegmentedProps, Spin } from 'antd';
import React, { useRef } from 'react';
import { Sandbox, SandboxHandle } from './Sandbox';
import { getOrCreateModel } from './libs/monaco';

export default Playground;

interface PlaygroundProps {
  tzenFilePath: string;
  testFilePath: string;
  exampleCode: string;
}

type PlaygroundTab = 'example' | 'test-case' | 'source';

function Playground(props: PlaygroundProps): JSX.Element {
  const [state, setStates] = useSetState({
    loaded: false
  });
  const sandboxHandle = useRef<SandboxHandle>(null);
  const { i18n } = useDocusaurusContext();
  const isZhLocale = i18n.currentLocale === 'zh';
  const edtiorSource: Record<PlaygroundTab, { filePath: string; fileContent: string }> = {
    example: {
      filePath: 'file:///example.ts',
      fileContent: props.exampleCode
    },
    'test-case': {
      filePath: `file:///${props.testFilePath}`,
      fileContent: source[props.testFilePath]
    },
    source: {
      filePath: `file:///${props.tzenFilePath}.d.ts`,
      fileContent: source[props.tzenFilePath]
    }
  };
  const segmentedProps: Omit<SegmentedProps, 'ref'> = {
    defaultValue: 'example',
    style: { userSelect: 'none' },
    options: [
      { label: isZhLocale ? '示例' : 'Example', value: 'example' },
      { label: isZhLocale ? '测试用例' : 'Test Case', value: 'test-case' },
      {
        label: isZhLocale ? '源码（TypeZen）' : 'Source Code(TypeZen)',
        value: 'source'
      }
    ],
    onChange(value) {
      const selectedTab = value as PlaygroundTab;
      const sandbox = sandboxHandle.current?.getSandbox();

      changeSanboxModel(selectedTab);

      if (sandbox) {
        sandbox.editor.updateOptions({
          readOnly: selectedTab === 'source'
        });
      }
    },
    disabled: !state.loaded
  };

  return (
    <div
      style={{
        width: '100%',
        height: 350,
        marginBottom: 20
      }}
    >
      <Segmented {...segmentedProps} />
      <Spin
        spinning={!state.loaded}
        indicator={<LoadingOutlined style={{ color: '#258dc1' }} />}
      >
        <div
          style={{
            height: 300,
            boxShadow: state.loaded ? '0 0 10px 0 rgba(0, 0, 0, 0.3)' : 'none'
          }}
        >
          <Sandbox
            version="5.0.4"
            onReady={() => {
              if (!state.loaded) setStates({ loaded: true });
              initSandboxMonaco();
            }}
            ref={sandboxHandle}
          />
        </div>
      </Spin>
    </div>
  );

  function changeSanboxModel(currentTab: PlaygroundTab) {
    const sandbox = sandboxHandle.current?.getSandbox();
    const { filePath, fileContent } = edtiorSource[currentTab];

    if (sandbox) {
      sandbox.editor.setModel(getOrCreateModel(sandbox.monaco, fileContent, filePath));
    }
  }

  function initSandboxMonaco() {
    const sandbox = sandboxHandle.current?.getSandbox();

    if (sandbox) {
      sandbox.editor.updateOptions({});

      const typeToolkitLibs = Object.entries(source).map(([filePath, fileContent]) => ({
        content: fileContent,
        filePath: `file:///node_modules/type-toolkit/dist/${filePath}`
      }));

      const sourceLibs = Object.entries(source).map(([filePath, fileContent]) => ({
        content: fileContent,
        filePath: `file:///${filePath}`
      }));
      sandbox.languageServiceDefaults.setExtraLibs([...typeToolkitLibs, ...sourceLibs]);

      sandbox.languageServiceDefaults.addExtraLib(
        `
              import type * as Index from './dist';
              export type * from './dist';
              export default Index;`,
        'file:///node_modules/type-toolkit/index.d.ts'
      );

      fetch('https://cdn.skypack.dev/@type-zen/preset-type/index.d.ts?dts')
        .then(res => res.text())
        .then(content => {
          sandbox.languageServiceDefaults.addExtraLib(
            content,
            'file:///node_modules/@type-zen/preset-type/index.d.ts'
          );
        });

      changeSanboxModel('example');
    }
  }
}
