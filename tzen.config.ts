import { defineConfig } from '@type-zen/cli';

export default defineConfig({
  watch: true,
  compiler: {
    output: {
      ignoreCheck: true
    }
  }
});
