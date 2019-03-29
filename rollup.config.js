import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
export default {
    input: './src/index.js',
    output: {
        file: './dist/xieyezi-lyric.esm.js',
        format: 'es',
        name:'xieyezi-storage'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        terser()
    ]
};