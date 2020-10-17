const { libraryCompiler } = require('@rockpack/compiler');

libraryCompiler({
  name: 'HelloWorld',
  cjs: {
    src: './src',
    dist: './lib/cjs'
  },
  esm: {
    src: './src',
    dist: './lib/esm'
  },
  external: [],
});
