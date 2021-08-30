import { defineConfig } from 'dumi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  fastRefresh: {},

  dynamicImport: {},

  webpack5: {},

  // esbuild: {},

  mfsu: {},

  locales: [['zh-CN', '中文']],

  mode: 'site',
})
