import { config } from '@nl-design-system/rollup-config-react-component';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: ['./src/ma-navigation-drawer.tsx', './src/css.tsx'],
  ...config,
});
