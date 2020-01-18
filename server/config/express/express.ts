import * as path from 'path';

import AboutRoutes from '../../app/about/about.routes';
import Config from '../configuration/config';
import CoreRoutes from '../../app/core/core.routes';
import IExpress from './iexpress';
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { promises as fs } from 'fs';
import helmet from 'helmet';
import httpError from 'http-errors';
import logger from 'morgan';
import methodOverride from 'method-override';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerOptions from '../swagger/swagger-def';
import swaggerUi from 'swagger-ui-express';

/** @inheritdoc */
export default class Express implements IExpress {
    /** @inheritdoc */
    readonly app: express.Application;

    private config = new Config();
    private distDirectory = '../dist/';

    /** Initializes a new instance of the Express class */
    constructor() {
    	this.app = express();
    }

    /** @inheritdoc */
    async init(): Promise<void> {
    	// init logger
    	this.initLogger();

    	// serve the files
    	this.initFileServer();

    	// init body parser
    	this.initBodyParser();

    	// secure apps by setting various HTTP headers
    	this.app.use(helmet());

    	// enable CORS - Cross Origin Resource Sharing
    	this.app.use(cors());

    	// init routes
    	await this.initRoutes();

    	// init middleware
    	this.initMiddleware();
    }

    /** Initializes the logger */
    private initLogger(): void {
    	if (this.config.config.env === 'development') {
    		this.app.use(logger('dev'));
    	}
    }

    /** Initializes the file server */
    private initFileServer(): void {
    	// serve the files
    	this.app.use(express.static(path.join(__dirname, this.distDirectory)));
    	// this.app.use(/^((?!(api)).)*/, (_req, res) => {
    	// 	res.sendFile(path.join(__dirname, this.distDirectory + '/index.html'));
    	// });
    }

    /** Initializes the body parser */
    private initBodyParser(): void {
    	// setup body parser
    	this.app.use(bodyParser.json());
    	this.app.use(bodyParser.urlencoded({ extended: true }));

    	this.app.use(cookieParser());
    	this.app.use(compress());
    	this.app.use(methodOverride());
    }

    /** Initializes the routes */
    private async initRoutes(): Promise<void> {
    	// init swagger
    	await this.initSwagger();

    	const router = express.Router();
    	router.use('', new CoreRoutes().router);
    	router.use('', new AboutRoutes().router);

    	this.app.use('/api/', router);
    }

    /** Initializes swagger */
    private async initSwagger(): Promise<void> {
    	// const options = {
    	// 	definition: {
    	// 		openapi: '3.0.0',
    	// 		info: {
    	// 			title: 'REST API for my website',
    	// 			version: this.config.config.version,
    	// 			description: 'This is the REST API for my website'
    	// 		},
    	// 		servers: [
    	// 			{
    	// 				url: `{scheme}://${this.config.config.host}:{port}/{basePath}`,
    	// 				description: 'The development API server',
    	// 				variables: {
    	// 					scheme: { default: 'http' },
    	// 					port: { default: this.config.config.port },
    	// 					basePath: { default: 'api' }
    	// 				}
    	// 			}
    	// 		],
    	// 		consumes: ['application/json'],
    	// 		produces: ['application/json']
    	// 	},
    	// 	apis: ['**/*.ts']
    	// };

    	// we want to save the swagger spec to a file so the generator can use this to create the client side apis
    	const swaggerSpec = swaggerJSDoc(swaggerOptions);

    	await fs.writeFile(`${process.cwd()}/swagger-api-spec.json`, JSON.stringify(swaggerSpec));

    	this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    /** Initializes the middleware */
    private initMiddleware(): void {
    	// catch 404 and forward to error handler
    	this.app.use((_req: any, _res: any, next: any) => {
    		const err = new httpError(404);
    		return next(err);
    	});

    	// error handler, send stacktrace only during development
    	this.app.use((err: any, _req: any, res: any, next: any) => {
    		res.status(err.status || 500).json({
    			message: err.message
    		});

    		next(err);
    	});
    }
}
