declare type Locale = 'zh' | 'en';

declare type DocumentConfigParam = {
  name: string;
  description: Record<Locale, string>;
} & Partial<
  Record<
    'type' | 'default',
    | string /* any, string, boolean, ... */
    | {
        /** XXXOptions */
        name: string;
        code: {
          /**string/replace/index.tzen */
          filePath: string;
          /** [1, 3] */
          line: [start: number, end: number];
        };
      }
  >
>;

declare interface DocumentConfig {
  /**
   * The output path for the documentation files, relative to the docs directory for different languages.
   *
   * en: docs/docs
   *
   * zh: docs/i18n/zh/docusaurus-plugin-content-docs/current
   */
  outputFilePath: string;
  /** see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs */
  setting: {
    slug: string;
    title: string;
  };
  description: Record<Locale, string>;
  return?: { type?: string; description: Record<Locale, string> };
  params: DocumentConfigParam[];
  example: string;
  sourceFilePath: string;
  testFilePath: string;
}
