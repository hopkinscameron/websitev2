import { Document, Schema, model } from 'mongoose';

import CommonFunctions from '../../../helpers/common-functions';

const schema = new Schema({
	category: { required: true, type: String },
	game: { required: true, type: String }
});

if (!schema['options'].toObject) schema['options'].toObject = {};
schema.set('toObject', { versionKey: false });
schema.set('toObject', { versionKey: false });
schema['options'].toObject.transform = CommonFunctions.transformModel;

/**
 * The favorite game model
 * @swagger
 * components:
 *   schemas:
 *     FavoriteGameModel:
 *       properties:
 *         category:
 *           type: string
 *         game:
 *           type: string
 */
export interface IFavoriteGameModel {
    category: string;
    game: string;
}

/** @inheritdoc */
export interface IFavoriteGameDocument extends IFavoriteGameModel, Document { }

/** @inheritdoc */
export class FavoriteGameModel implements IFavoriteGameModel {
    category: string;
    game: string;
}

/** Favorite Game Mongo Schema Model */
export const FavoriteGames = model<IFavoriteGameDocument>('FavoriteGames', schema);
