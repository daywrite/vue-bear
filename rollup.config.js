import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  format: 'umd',
  moduleName: 'VueBear',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  dest: 'dist/vue-bear.js',
  external: [
    'vue',
    'vue-router',
    'iframe-resizer',
    'vue-bus',
    'vue-router',
    'postmonger',
    'iframe-resizer/js/iframeResizer.contentWindow'
  ]
}
