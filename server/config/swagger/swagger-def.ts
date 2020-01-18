import Config from '../configuration/config';
const config = new Config();

/** The swagger options */
export default {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'REST API for my website',
			version: config.config.version,
			description: 'This is the REST API for my website'
		},
		servers: [
			{
				url: `{scheme}://${config.config.host}:{port}/{basePath}`,
				description: 'The development API server',
				variables: {
					scheme: { default: 'http' },
					port: { default: config.config.port },
					basePath: { default: 'api' }
				}
			}
		],
		consumes: ['application/json'],
		produces: ['application/json']
	},
	apis: ['**/*.ts']
};
