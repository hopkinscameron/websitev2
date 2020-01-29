import AboutController from './about.controller';
import asyncHandler from 'express-async-handler';
import express from 'express';

/** The about routes */
export default class AboutRoutes {
    /** The express router for the about routes */
    readonly router = express.Router();

    private aboutController = new AboutController();

    /** Initializes a new instance of the AboutRoutes class */
    constructor() {
    	this.router.route('/v1/about')
    		.post(asyncHandler(this.aboutController.createAboutInfo));

    	this.router.route('/v1/about/latest')
    		.get(asyncHandler(this.aboutController.getLatestAboutInfo));

    	this.router.route('/v1/about/:id')
    		.get(this.aboutController.getAboutInfo)
    		.post(asyncHandler(this.aboutController.updateAboutInfo));

    	// bind the middleware
    	this.router.param('id', asyncHandler(this.aboutController.aboutById));
    }
}
