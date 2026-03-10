import { config } from '@nl-design-system/rollup-config-react-component';
import { defineConfig } from 'rollup';

const _config = config;
_config.output.entryFileNames = '[name].mjs';

export default defineConfig({
  input: ['./src/ma-card-list.tsx'],
  ...config,
});
