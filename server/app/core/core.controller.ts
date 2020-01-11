import express from 'express';

/** The core controller */
export class CoreController {
	/**
     * Checks the heath of the server
     * @param {express.Request} _req the request from the client
     * @param {express.Request} res response tp the client
     * @returns {Promise<any>} Promise to the response
     */
	healthCheck(_req: express.Request, res: express.Response): Promise<any> {
		return res.json({ message: 'Everything is okay' });
	}

	/**
     * Checks the heath of the server
     * @param {express.Request} _req the request from the client
     * @param {express.Request} res response tp the client
     * @returns {Promise<any>} Promise to the response
     */
	healthCheckV2(_req: express.Request, res: express.Response): Promise<any> {
		return res.json({ message: 'Everything is okay, part 2' });
	}
}
