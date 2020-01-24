import { AboutModel, Abouts } from './models/about.model';
import { DateSortModel, IDateSortModel } from '../../shared/models/date-sort.model';
import { NextFunction, Request, Response } from 'express';

import { FavoriteGames } from './models/favorite-game.model';
import _ from 'lodash';

/** The about controller */
export default class AboutController {
	/**
     * Gets the data for the about page
     * @param {Request} req the request from the client
     * @param {Response} res the response to the client
     * @returns {Promise<AboutModel>} The response
     */
	async createAboutInfo(req: Request, res: Response): Promise<AboutModel> {
		await FavoriteGames.insertMany(req.body.favoriteGames);
		const games = await FavoriteGames.find({});
		const a = new AboutModel();
		a.favoriteGames = games;
		a.hobbies = req.body.hobbies;
		a.bio = req.body.bio;
		req.foundAbout = await Abouts.create(a);
		return this.getAboutInfo(req, res);
	}

	/**
     * Gets the latest data for the about page
     * @param {Request} req the request from the client
     * @param {Response} res the response to the client
     * @returns {Promise<AboutModel>} The latest AboutModel
     */
	async getLatestAboutInfo(req: Request, res: Response): Promise<AboutModel> {
		try {
			const sortBy: IDateSortModel = new DateSortModel();
			sortBy.updatedAt = 1;

			if (_.toLower(req.query.by) === 'created') {
				sortBy.createdAt = 1;
				sortBy.updatedAt = null;
			}

			const foundAbouts = await Abouts.find({ }).sort(sortBy).limit(1).populate('favoriteGames').exec();
			const foundAbout = foundAbouts ? foundAbouts[0].toObject() : null;

			return res.json(foundAbout);
		} catch (err) {
			throw err;
		}
	}

	/**
     * Gets the data for the about page
     * @param {Request} req the request from the client
     * @param {Response} res the response to the client
     * @returns {AboutModel} The AboutModel by id
     */
	getAboutInfo(req: Request, res: Response): AboutModel {
		try {
			return res.json(req.foundAbout.toObject());
		} catch (err) {
			throw err;
		}
	}

	/**
     * Updates the data for the about page
     * @param {Request} req the request from the client
     * @param {Response} res the response to the client
     * @returns {Promise<AboutModel>} The Updated AboutModel
     */
	async updateAboutInfo(req: Request, res: Response): Promise<AboutModel> {
		req.foundAbout.hobbies = req.body.hobbies;
		req.foundAbout.bio = req.body.bio;
		return res.json(await req.foundAbout.save());
	}

	/**
     * Gets the data for the about page by id
     * @param {Request} req the request from the client
     * @param {Response} res the response to the client
	 * @param {NextFunction} next the callback
	 * @param {string} id the parameter id
     * @returns {Promise<NextFunction>} The response
     */
	async aboutById(req: Request, res: Response, next: NextFunction, id: string): Promise<NextFunction> {
		try {
			const foundAbout = await Abouts.findById(id).populate('favoriteGames').exec();

			if (foundAbout) {
				req.foundAbout = foundAbout;
				return next();
			}

			throw new Error(`About with the id ${id} does not exist`);
		} catch (e) {
			return next(e);
		}
	};
}
