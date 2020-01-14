import { Request, Response } from 'express';

import { About } from './models/about.model';

/** The about controller */
export default class AboutController {
	/**
     * Gets the data for the about page
     * @param {Request} _req the request from the client
     * @param {Response} res the response to the client
     * @returns {Response} The response
     */
	async getAboutInfo(_req: Request, res: Response): Response {
		try {
			return res.json(await About.findOne({ }));
		} catch (err) {
			throw err;
		}
	}
}
