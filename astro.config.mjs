import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://sheerfacade.example',
  trailingSlash: 'never',
  build: { format: 'directory' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
