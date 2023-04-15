/**
 * Source code comes from `https://github.com/HiDeoo/ts-playground-block/blob/main/blocks/components/Sandbox.tsx`
 */

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

import { createTwoslashInlayProvider } from './libs/monaco';
import { tsVersionSupportsInlayHints, type TSSandbox } from './libs/typescript';
import React from 'react';

export const Sandbox = forwardRef<SandboxHandle, SandboxProps>(function Sandbox(
  { onReady, version }: SandboxProps,
  forwardedRef
) {
  useImperativeHandle(forwardedRef, () => ({ getSandbox }));

  const editor = useRef<HTMLDivElement>(null);
  const sandbox = useRef<TSSandbox | undefined>(undefined);

  useEffect(() => {
    if (!editor.current || editor.current.childElementCount > 0) {
      return;
    }

    const getLoaderScript = document.createElement('script');
    getLoaderScript.src = 'https://www.typescriptlang.org/js/vs.loader.js';
    getLoaderScript.async = true;

    getLoaderScript.addEventListener('load', () => {
      // Changing version without reloading the page like the official Playground requires to reset the module manager.
      const require = window.require as any;
      const ts = (window as any).ts as typeof import('typescript');
      require.reset();

      require.config({
        ignoreDuplicateModules: ['vs/editor/editor.main'],
        paths: {
          vs: `https://typescript.azureedge.net/cdn/${version}/monaco/min/vs`,
          sandbox: 'https://www.typescriptlang.org/js/sandbox'
        }
      });

      require([
        'vs/editor/editor.main',
        'vs/language/typescript/tsWorker',
        'sandbox/index'
      ], (
        monaco: typeof import('monaco-editor') | undefined,
        _tsWorker: // | typeof import('@typescript/sandbox/dist/tsWorkets').TypeScriptWorker
        undefined,
        sandboxFactory: typeof import('@typescript/sandbox') | undefined
      ) => {
        // Importing `vs/language/typescript/tsWorker` will set `ts` as a global.
        if (!monaco || !ts || !sandboxFactory) {
          console.error('Failed to load a Playground dependency:', {
            main: monaco,
            ts,
            sandbox: sandboxFactory
          });
          return;
        }

        sandbox.current = sandboxFactory.createTypeScriptSandbox(
          {
            acquireTypes: true,
            compilerOptions: {},
            domID: 'editor',
            filetype: 'ts',
            supportTwoslashCompilerOptions: true,
            text: ''
          },
          monaco,
          ts
        );

        sandbox.current.editor.updateOptions({
          renderValidationDecorations: 'on',
          theme: 'vs-dark',
          autoDetectHighContrast: false,
          scrollBeyondLastLine: false,
          scrollBeyondLastColumn: 0
        });

        if (tsVersionSupportsInlayHints(sandbox.current.ts.version)) {
          monaco.languages.registerInlayHintsProvider(
            sandbox.current.language,
            createTwoslashInlayProvider(sandbox.current)
          );
        }

        onReady();
      });
    });

    document.body.append(getLoaderScript);

    return () => {
      getLoaderScript.remove();
    };
  }, [onReady, version]);

  useEffect(() => {
    function handleResize() {
      sandbox.current?.editor.layout();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getSandbox() {
    return sandbox.current;
  }

  return (
    <div
      ref={editor}
      id="editor"
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  );
});

interface SandboxProps {
  onReady: () => void;
  version: string;
}

export interface SandboxHandle {
  getSandbox: () => TSSandbox | undefined;
}
