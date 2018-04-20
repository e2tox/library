import typescript from 'rollup-plugin-typescript2';
import minify from 'rollup-plugin-babel-minify';

export default {

  input: './src/lib/index.ts',

  plugins: [
    typescript({
      cacheRoot: '/tmp/.rpt2_cache',
      tsconfig: 'tsconfig.release.json'
    }),
    minify({
      // Options for babel-minify.
      banner: '/* Enterprise Web Application Stack */'
    })
  ],

  output: [
    {
      file: './release/lib/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: './release/lib/index.esm.js',
      format: 'es'
    }
  ],

  external: [
    'agentframework',
    'agentstack',
    'mongodb-core',
    'retry',
    'statuses',
    'vary',
    'accepts',
    'resolve-path',
    'type-is',
    'busboy',
    'cookie',
    'keygrip',
    'content-disposition',
    'mime-types',
    'assert',
    'crypto',
    'fs',
    'path',
    'stream',
    'util',
    'os',
    'events',
    'http',
    'querystring',
    'url'
  ]
}
