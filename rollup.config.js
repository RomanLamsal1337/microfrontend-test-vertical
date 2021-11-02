import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"
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
        file: 'dist/index.js',
        format: 'esm',
    },
    plugins: [
        // order of plugins is important!
        resolve(),
        commonjs({
            include: 'node_modules/**'
        }),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss({
            extensions: [ '.css' ],
        }),
        babel({
            babelHelpers: 'bundled',
            extensions: ['.ts', '.tsx', '.mjs', '.js'],
        }),
        allExportsAsDefault()
    ],
}
export default config
