import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
// import { terser } from 'rollup-plugin-terser';


export default {
    input: 'src/index.js',
    output: {
        name: 'three0-js-sdk',
        file: 'dist/output.js',
        format: 'umd',
        globals: {
            "near-api-js": "nearApiJs",
            "orbit-db": "OrbitDB",
            "orbit-db-identity-provider": "Identities",
            "uuid": "uuid",
            "ipfs-core": "IPFS",
            "js-sha256": "js_sha256",
        },
        sourcemap: true,
    },
    plugins: [
        resolve(),
        babel({ 
            babelHelpers: 'bundled', 
            inputSourceMap: true,
            exclude: 'node_modules/**',
            presets: [
            [
                '@babel/preset-env',
                {
                    // modules: 'false',
                    targets: {
                        esmodules: true,
                        browsers: '> 1%, IE 11, not op_mini all, not dead',
                        node: 8
                    },
                    useBuiltIns: 'usage'
                },
                '@babel/plugin-proposal-nullish-coalescing-operator'
            ]
            ]
        }),
        commonjs(),
        json(),
        // terser(),
    ]
}