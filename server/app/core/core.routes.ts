import { CoreController } from './core.controller';
import express from 'express';

/** The core routes */
export class CoreRoutes {
    /** The express router for the core routes */
    readonly routerV1 = express.Router();
    readonly routerV2 = express.Router();

    private coreController = new CoreController();

    /** Initializes a new instance of the Express class */
    constructor() {
    	/** TODO: figure out what this is. GET /health-check - Check service health */
    	this.routerV1.route('v1/health-check')
    		.get(this.coreController.healthCheck);
    	this.routerV1.route('v2/health-check')
    		.get(this.coreController.healthCheckV2);
    }
}
