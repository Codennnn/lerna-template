import strip from '@rollup/plugin-strip'

export default {
  cjs: 'rollup',
  cssModules: true,
  plugins: [
    strip({
      include: '**/*.(mjs|js|jsx|ts|tsx)',
      functions: ['console.log', 'assert.*'],
    }),
  ],
}
