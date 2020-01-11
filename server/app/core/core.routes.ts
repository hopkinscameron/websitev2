import CoreController from './core.controller';
import express from 'express';

/** The core routes */
export default class CoreRoutes {
    /** The express router for the core routes */
    readonly router = express.Router();

    private coreController = new CoreController();

    /** Initializes a new instance of the CoreRoutes class */
    constructor() {
    	this.router.route('/v1/health-check')
    		.get(this.coreController.healthCheck);
    }
}
