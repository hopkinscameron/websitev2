import Config from '../configuration/config';
const config = new Config();

/** The swagger options */
export default {
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
	paths: {
	  	'/v1/about': {
			post: {
				operationId: 'createAbout',
				summary: 'Create a new AboutModel',
				tags: ['about'],
				requestBody: {
					required: true,
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/AboutModel'
							}
						}
					}
				},
				responses: {
					200: {
						description: 'Created a new AboutModel',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/AboutModel'
								}
							}
						}
					}
				}
			}
		},
		'/v1/about/latest': {
			get: {
				operationId: 'getLatestAbout',
				summary: 'Gets the latest AboutModel',
				tags: ['about'],
				parameters: [
					{
						name: 'by',
						in: 'query',
						schema: { type: 'string', enum: ['created', 'updated'] },
						description: 'Latest by either created date or last updated'
					}
				],
				responses: {
					200: {
						description: 'Created a new AboutModel',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/AboutModel'
								}
							}
						}
					}
				}
			}
  		},
	  	'/v1/about/:id': {
			get: {
				summary: 'Gets the AboutModel by id',
				operationId: 'getAbout',
				tags: ['about'],
				parameters: [
					{
						name: 'id',
						in: 'path',
						required: true,
						schema: { type: 'string' },
						description: 'The AboutModel id'
					}
				],
		  		responses: {
					200: {
						description: 'Retrieved AboutModel associated with this id',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/AboutModel'
								}
							}
						}
					}
		  		}
			},
			post: {
				summary: 'Updates the AboutModel',
				operationId: 'updateAbout',
				tags: ['about'],
		  		parameters: [
					{
						name: 'id',
						in: 'path',
						required: true,
						schema: {
							type: 'string'
						},
			  			description: 'The AboutModel id'
					}
		  		],
		  		requestBody: {
					required: true,
					content: {
			  			'application/json': {
							schema: {
				  				$ref: '#/components/schemas/AboutModel'
							}
			  			}
					}
		  		},
				responses: {
					200: {
						description: 'Returns the updated AboutModel',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/AboutModel'
								}
							}
						}
					}
				}
			}
	  	},
		'/v1/health-check': {
			get: {
				summary: 'Checks the state of the server',
				operationId: 'checkHealth',
				tags: ['health-check'],
				responses: {
					200: {
						description: 'Healthy server',
						content: {
							'application/json': {
								schema: {
									type: 'string'
								}
							}
						}
					}
				}
			}
		}
	},
	components: {
	  	schemas: {
			AboutModel: {
		  		type: 'object',
		  		properties: {
					bio: {
			  			type: 'string'
					},
					hobbies: {
			  			type: 'array',
			  			items: {
							type: 'string'
			  			}
					},
					favoriteGames: {
						type: 'array',
						items: {
							$ref: '#/components/schemas/FavoriteGameModel'
			  			}
					}
		  		},
				required: ['bio', 'hobbies', 'favoriteGames']
			},
			FavoriteGameModel: {
		  		type: 'object',
		  		properties: {
					category: {
			  			type: 'string'
					},
					game: {
			  			type: 'string'
					}
		  		},
		  		required: ['category', 'game']
			}
	  	}
	},
	tags: []
};
