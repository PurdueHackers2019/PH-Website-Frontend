const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withOffline = require('next-offline');
const { publicRuntimeConfig } = require('./src/config/env-config');

// fix: prevents error when .css/.less files are required by node
// if (typeof require !== 'undefined') {
// 	// tslint:disable: no-empty
// 	require.extensions['.less'] = () => {};
// 	require.extensions['.css'] = () => {};
// }

module.exports = withPlugins(
	[
		[withCss],
		[
			withOffline,
			{
				scope: '/',
				dontAutoRegisterSw: true,
				generateSw: false,
				workboxOpts: {
					swSrc: './service-worker.js',
					swDest: './service-worker.js'
				}
			}
		],
		[
			withBundleAnalyzer({
				enabled: publicRuntimeConfig.ANALYZE
			})
		]
	],

	{
		publicRuntimeConfig,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		webpack: (config, options) => {
			// config.plugins = config.plugins.filter(plugin => {
			// 	if (plugin.constructor.name === 'ForkTsCheckerWebpackPlugin') return false;
			// 	return true;
			// });
			// const { dev, isServer } = options;
			// if (isServer && dev) {
			// 	const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

			// 	config.plugins.push(
			// 		new ForkTsCheckerWebpackPlugin({
			// 			tsconfig: '../tsconfig.server.json',
			// 			tslint: '../tslint.json'
			// 		})
			// 	);
			// }

			return config;
		}
	}
);
