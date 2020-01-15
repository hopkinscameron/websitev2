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
    	/**
         * @swagger
         * paths:
         *   /v1/about:
         *     post:
         *       summary: Create a new AboutModel
         *
         *       requestBody:
         *         required: true
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/AboutModel'
         *
         *       responses:
         *         '200':
         *           description: Created a new AboutModel
         *           schema:
         *             $ref: '#/definitions/AboutModel'
         */
    	this.router.route('/v1/about')
    		.post(asyncHandler(this.aboutController.createAboutInfo));

    	/**
         * @swagger
         * paths:
         *   /v1/about/:id:
         *     get:
         *       summary: Gets the AboutModel by id
         *
         *       parameters:
         *         - in: path
         *           required: true
         *           schema:
         *             type: string
         *           description: The AboutModel id
         *
         *       responses:
         *         '200':
         *           description: Retrieved AboutModel associated with this id
         *           schema:
         *             $ref: '#/definitions/AboutModel'
         *
         *     post:
         *       summary: Updates the AboutModel
         *
         *       requestBody:
         *         required: true
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/AboutModel'
         *
         *       responses:
         *         '200':
         *           description: Returns the updated AboutModel
         *           schema:
         *             $ref: '#/definitions/AboutModel'
         */
    	this.router.route('/v1/about/:id')
    		.get(this.aboutController.getAboutInfo)
    		.post(this.aboutController.updateAboutInfo);

    	// bind the middleware
    	this.router.param('id', asyncHandler(this.aboutController.aboutById));
    }
}
