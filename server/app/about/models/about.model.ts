import { Document, Model, Schema, model } from 'mongoose';

import { IFavoriteGameModel } from './favorite-game.model';

const schema = new Schema({
	bio: { required: true, type: String },
	hobbies: { type: [String] },
	favoriteGames: [{
		type: Schema.Types.ObjectId,
		ref: 'FavoriteGame'
	}]
});

/**
 * The about model
 * @swagger
 * definitions:
 *   AboutModel:
 *     properties:
 *       bio:
 *         type: string
 *       hobbies:
 *         type: string
 *       favoriteGames:
 *         type: array
 *         items:
 *           schema:
 *             $ref: '#/definitions/FavoriteGameModel'
 */
export interface IAboutModel {
    bio: string;
    hobbies: string[];
    favoriteGames: IFavoriteGameModel[];
}

/** @inheritdoc */
export interface IAboutDocument extends IAboutModel, Document { }

/** @inheritdoc */
export class AboutModel implements IAboutModel {
    bio: string;
    hobbies: string[];
    favoriteGames: IFavoriteGameModel[];
}

/** About Mongo Schema Model */
export const About: Model<IAboutDocument> = model<IAboutDocument>('About', schema);
