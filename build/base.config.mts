import { UserConfig } from 'vite';
import viteVue from '@vitejs/plugin-vue';
import path from 'path';

const baseConfig: UserConfig = {
  base: '/',
  envPrefix: ['NODE_ENV', 'VUE_'],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.cjs',
      '.cjsx',
      '.cts',
      '.ctsx',
      '.mjs',
      '.mjsx',
      '.mts',
      '.mtsx',
      '.vue',
    ],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [viteVue()],
};

export default baseConfig;
