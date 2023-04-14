import monaco from 'monaco-editor';

import { type TSSandbox } from './typescript';

const twoslashInlayProviderPattern = /^\s*\/\/\s*\^\?$/gm;

// https://github.com/microsoft/TypeScript-Website/blob/4a670b334df7be35c480f640009ce698a7bab02b/packages/playground/src/twoslashInlays.ts
export function createTwoslashInlayProvider(sandbox: TSSandbox) {
  const provider: monaco.languages.InlayHintsProvider = {
    provideInlayHints: async (model, _range, token) => {
      let match: RegExpExecArray | null;
      const text = model.getValue();

      const results: monaco.languages.InlayHint[] = [];
      const worker = await sandbox.getWorkerProcess();

      if (model.isDisposed()) {
        return getInlayProviderResults([]);
      }

      while ((match = twoslashInlayProviderPattern.exec(text)) !== null) {
        const end = match.index + match[0].length - 1;
        const endPos = model.getPositionAt(end);
        const inspectionPos = new sandbox.monaco.Position(
          endPos.lineNumber - 1,
          endPos.column
        );
        const inspectionOff = model.getOffsetAt(inspectionPos);

        if (token.isCancellationRequested) {
          return getInlayProviderResults([]);
        }

        const hint = await worker.getQuickInfoAtPosition(
          `file://${model.uri.path}`,
          inspectionOff
        );

        if (!hint?.displayParts) {
          continue;
        }

        // Inline hint
        let text = hint.displayParts
          .map(displayPart => displayPart.text)
          .join('')
          .replace(/\\n/g, '')
          .replace(/ {2}/g, '');

        if (text.length > 120) {
          text = `${text.slice(0, 119)}…`;
        }

        const inlay: monaco.languages.InlayHint = {
          kind: 1,
          label: text,
          paddingLeft: true,
          position: new sandbox.monaco.Position(endPos.lineNumber, endPos.column + 1)
        };

        results.push(inlay);
      }

      return getInlayProviderResults(results);
    }
  };

  return provider;
}

function getInlayProviderResults(
  hints: monaco.languages.InlayHint[],
  dispose?: () => void
) {
  return {
    hints: hints,
    dispose:
      dispose ??
      (() => {
        // noop
      })
  };
}

export function getOrCreateModel(
  monaco: typeof import('monaco-editor/esm/vs/editor/editor.api'),
  value: string,
  path: string
) {
  return (
    getModel(monaco, path) ||
    monaco.editor.createModel(value, 'typescript', monaco.Uri.parse(path))
  );
}

function getModel(
  monaco: typeof import('monaco-editor/esm/vs/editor/editor.api'),
  path: string
) {
  return monaco.editor.getModel(monaco.Uri.parse(path));
}


