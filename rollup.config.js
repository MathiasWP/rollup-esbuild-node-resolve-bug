import esbuild from 'rollup-plugin-esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
	{
		input: 'index.ts',
		plugins: [
			nodeResolve({ browser: true }),
			esbuild()
		],
		output: [
			{
				dir: 'dist',
				format: 'es'
			}
		]
	}
];
