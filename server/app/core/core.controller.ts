import { Request, Response } from 'express';

/** The core controller */
export default class CoreController {
	/**
     * Checks the heath of the server
     * @param {Request} _req the request from the client
     * @param {Response} res response tp the client
     * @returns {Response} The response
     */
	healthCheck(_req: Request, res: Response): Response {
		return res.json({ message: 'Everything is okay' });
	}
}