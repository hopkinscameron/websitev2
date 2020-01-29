import { DateSortModel, IDateSortModel } from '../../shared/models/date-sort.model';
import { NextFunction, Request, Response } from 'express';
import { ResumeData, ResumeDataModel } from './models/resume.model';

import Config from '../../config/configuration/config';

/** The resume controller */
export default class ResumeController {
	private config = new Config();
	private publicFolder = `${this.config.config.scheme}://${this.config.config.host}:${this.config.config.port}/public`;

	/**
	 * Gets the resume page data (will always get the latest (by updated))
	 * @param {Request} req the request from the client
	 * @param {Response} res the response to the client
	 * @returns {Promise<ResumeDataModel>} The latest ResumeDataModel
	 */
	getResumeData = async (req: Request, res: Response): Promise<ResumeDataModel> => {
		try {
			const sortBy: IDateSortModel = new DateSortModel();
			sortBy.updatedAt = 1;

			const foundResumeData = await ResumeData.find({ }).sort(sortBy).limit(1).exec();

			return res.json(foundResumeData ? foundResumeData[0].toObject() : null);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	};

	/**
     * Creates a new resume page data entry
     * @param {Request} req the request from the client
     * @param {Response} res the response to the client
     * @returns {Promise<ResumeDataModel>} The response
     */
	createResumeData = async (req: Request, res: Response): Promise<ResumeDataModel> => {
		try {
			const rd = new ResumeDataModel();
			rd.text = req.body.text;
			const resumeData = await ResumeData.create(rd);
			return res.json(resumeData.toObject());
		} catch (err) {
			return res.status(500).send(err.message);
		}
	};

	/**
     * Updates the data for the resume page data
     * @param {Request} req the request from the client
     * @param {Response} res the response to the client
     * @returns {Promise<ResumeDataModel>} The Updated ResumeDataModel
     */
	updateResumeData = async (req: Request, res: Response): Promise<ResumeDataModel> => {
		try {
			req.resumeData.hobbies = req.body.hobbies;
			req.resumeData.bio = req.body.bio;
			return res.json(await req.resumeData.save());
		} catch (err) {
			return res.status(500).send(err.message);
		}
	};

	/**
     * Gets the data for the resume page data by id
     * @param {Request} req the request from the client
     * @param {Response} res the response to the client
	 * @param {NextFunction} next the callback
	 * @param {string} id the parameter id
     * @returns {Promise<NextFunction>} The response
     */
	resumeDataById = async (req: Request, res: Response, next: NextFunction, id: string): Promise<NextFunction> => {
		try {
			const resumeData = await ResumeData.findById(id).exec();

			if (resumeData) {
				req.resumeData = resumeData;
				return next();
			}

			throw new Error(`Resume with the id ${id} does not exist`);
		} catch (e) {
			return next(e);
		}
	};

	/**
	 * Gets the resume
	 * @param {Request} req the request from the client
	 * @param {Response} res the response to the client
	 * @returns {string} The string to the url of the resume
	 */
	getResume = (req: Request, res: Response): string => {
		try {
			return res.json(`${this.publicFolder}/resume.pdf`);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	};

	/**
	 * Gets the curriculum citae
	 * @param {Request} req the request from the client
	 * @param {Response} res the response to the client
	 * @returns {string} The string to the url of the curriculum citae
	 */
	getCurriculumVitae = (req: Request, res: Response): string => {
		try {
			return res.json(`${this.publicFolder}/curriculum-vitae.pdf`);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	};
}
