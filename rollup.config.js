import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import css from "rollup-plugin-import-css"
import babel from "@rollup/plugin-babel"

const allExportsAsDefault = () => ({
    name: 'allExportsAsDefault',
    async renderChunk(code, chunk) {
        return `${code.replace(/export { .+ };/, "")}\nexport default { ${chunk.exports.join(', ')} };`
    }
})

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: './src/components/index.ts',
    output: {
        file: 'dist/test-vertical.js',
        format: 'esm',
    },
    plugins: [
        // order of plugins is important!
        nodeResolve(),
        commonjs({
            include: 'node_modules/**'
        }),
        typescript({ useTsconfigDeclarationDir: true }),
        css(),
        babel({
            babelHelpers: 'bundled',
            extensions: ['.ts', '.tsx', '.mjs', '.js', '.css'],
        }),
        allExportsAsDefault()
    ],
}
export default config
