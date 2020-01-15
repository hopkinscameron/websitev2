import AboutController from './about.controller';
import express from 'express';

/** The about routes */
export default class AboutRoutes {
    /** The express router for the about routes */
    readonly router = express.Router();

    private aboutController = new AboutController();

    /** Initializes a new instance of the AboutRoutes class */
    constructor() {
    	/**
         * @swagger
         * /v1/about:
         *   get:
         *     description: Returns the data associated with the about page
         *     produces:
         *      - application/json
         *     responses:
         *       200:
         *         description: Returns the data associated with the about page
         *         schema:
         *           $ref: '#/definitions/FavoriteGameModel'
         *   post:
         *     description: Create a new about with the data passed to the body
         *     produces:
         *      - application/json
         *     responses:
         *       200:
         *         description: Returns the latest data associated with the about page
         *         schema:
         *           $ref: '#/definitions/FavoriteGameModel'
         */
    	this.router.route('/v1/about')
    		.get(this.aboutController.getAboutInfo);

    	this.router.route('/v1/about')
    		.post(this.aboutController.createAboutInfo);

    	// bind the middleware
    	this.router.param('aboutId', this.aboutController.aboutById);
    }
}
