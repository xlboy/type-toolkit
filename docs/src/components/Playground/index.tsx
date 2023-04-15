import { LoadingOutlined } from '@ant-design/icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import source from '@site/static/source.json';
import { useSetState } from 'ahooks';
import { Button, Col, Row, Segmented, SegmentedProps, Spin, Tag, Tooltip } from 'antd';
import React, { SVGProps, useRef } from 'react';
import { Sandbox, SandboxHandle } from './Sandbox';
import { getOrCreateModel } from './libs/monaco';

export default Playground;

interface PlaygroundProps {
  tzenFilePath: string;
  testFilePath: string;
  exampleCode: string;
}

type PlaygroundTab = 'example' | 'test-case' | 'source';
const tsVersion = '5.0.4';

function Playground(props: PlaygroundProps): JSX.Element {
  const [state, setStates] = useSetState({
    loaded: false,
    currentTab: 'example' as PlaygroundTab
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

      setStates({ currentTab: selectedTab });
      changeSandboxModel(selectedTab);

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
        marginBottom: 20
      }}
    >
      <Row justify="space-between">
        <Col span={12}>
          <Segmented {...segmentedProps} />
        </Col>
        <Col span={12}>
          <Row justify="end" align="middle" style={{ height: '100%' }}>
            {state.loaded && (
              <Tooltip title="Reset">
                <ResetIcon
                  style={{ fontSize: 17, cursor: 'pointer' }}
                  onClick={resetCurrentCode}
                />
              </Tooltip>
            )}
          </Row>
        </Col>
      </Row>
      <Spin
        spinning={!state.loaded}
        indicator={<LoadingOutlined style={{ color: '#258dc1' }} />}
      >
        <div
          style={{
            position: 'relative',
            height: 300,
            boxShadow: state.loaded ? '0 0 10px 0 rgba(0, 0, 0, 0.3)' : 'none'
          }}
        >
          {state.loaded && (
            <Tag
              bordered={false}
              color="#258dc1"
              style={{
                position: 'absolute',
                right: 8,
                bottom: 6,
                zIndex: 1,
                opacity: 0.6,
                pointerEvents: 'none'
              }}
            >
              TS@{tsVersion}
            </Tag>
          )}

          <Sandbox
            version={tsVersion}
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

  function resetCurrentCode() {
    const sandbox = sandboxHandle.current?.getSandbox();
    const { fileContent } = edtiorSource[state.currentTab];

    if (sandbox) {
      sandbox.setText(fileContent);
    }
  }

  function changeSandboxModel(currentTab: PlaygroundTab) {
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

      changeSandboxModel('example');
    }
  }

  function ResetIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 21 21"
        {...props}
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5"></path>
          <path d="M7.5 6.5h-4v-4"></path>
        </g>
      </svg>
    );
  }
}
