import { defineConfig } from 'dumi'

export default defineConfig({
  locales: [['zh-CN', '中文']],

  nodeModulesTransform: {
    type: 'none',
  },

  fastRefresh: {},

  dynamicImport: {},

  webpack5: {},

  // esbuild: {},

  // mfsu: {},
})
