import * as path from 'path';

import { Config } from '../configuration/config';
import { IExpress } from './iexpress';
import _ from 'lodash';
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import httpError from 'http-errors';
import logger from 'morgan';
import methodOverride from 'method-override';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

/** @inheritdoc */
export class Express implements IExpress {
    /** @inheritdoc */
    readonly app: express.Application;

    private config = new Config();
    private distDirectory = '../dist/';

    /**
     * Initializes a new instance of the Express class
     */
    constructor() {
    	this.app = express();

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
    	this.initRoutes();

    	// init middleware
    	this.initMiddleware();
    }

    /**
     * Initializes the logger
     * @returns {void} nothing to be returned
     */
    private initLogger(): void {
    	if (this.config.config.env === 'development') {
    		this.app.use(logger('dev'));
    	}
    }

    /**
     * Initializes the file server
     * @returns {void} nothing to be returned
     */
    private initFileServer(): void {
    	// serve the files
    	this.app.use(express.static(path.join(__dirname, this.distDirectory)));
    	// this.app.use(/^((?!(api)).)*/, (_req, res) => {
    	// 	res.sendFile(path.join(__dirname, this.distDirectory + '/index.html'));
    	// });
    }

    /**
     * Initializes the body parser
     * @returns {void} nothing to be returned
     */
    private initBodyParser(): void {
    	// setup body parser
    	this.app.use(bodyParser.json());
    	this.app.use(bodyParser.urlencoded({ extended: true }));

    	this.app.use(cookieParser());
    	this.app.use(compress());
    	this.app.use(methodOverride());
    }

    /**
     * Initializes the routes
     * @returns {void} nothing to be returned
     */
    private initRoutes(): void {
    	// init swagger
    	this.initSwagger();

    	const router = express.Router();

    	_.forEach(this.config.routes, (routePath) => {
    		// eslint-disable-next-line no-console
    		console.info(routePath);
    		const routeClass = require(path.resolve(routePath));
    		// eslint-disable-next-line no-console
    		console.info('make it');
    		const initializedClass = new routeClass();

    		if (initializedClass.routerV1) {
    			router.use('', initializedClass.routerV1);
    		}
    		if (initializedClass.routerV1) {
    			router.use('', initializedClass.routerV2);
    		}
    	});

    	this.app.use('/api/', router);
    }

    /**
     * Initializes swagger
     * @returns {void} nothing to be returned
     */
    private initSwagger(): void {
    	const swaggerDefinition = {
    		info: {
    			title: 'REST API for my website',
    			version: this.config.config.version,
    			description: 'This is the REST API for my website',
    		},
    		host: `${this.config.config.host}:${this.config.config.port}`,
    		basePath: '/api'
    	};

    	const options = {
    		swaggerDefinition,
    		apis: ['**/*.ts']
    	};

    	this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
    }

    /**
     * Initializes the middleware
     * @returns {void} nothing to be returned
     */
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
