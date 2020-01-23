import { Document, Schema, model } from 'mongoose';

import CommonFunctions from '../../../shared/helpers/common-functions';

const schema = new Schema({
	category: { required: true, type: String },
	games: { required: true, type: [String] }
}, { timestamps: true });

if (!schema['options'].toObject) schema['options'].toObject = {};
schema.set('toObject', { versionKey: false });
schema.set('toObject', { versionKey: false });
schema['options'].toObject.transform = CommonFunctions.transformModel;

/** The favorite game model */
export interface IFavoriteGameModel {
    category: string;
    games: string[];
}

/** @inheritdoc */
export interface IFavoriteGameDocument extends IFavoriteGameModel, Document { }

/** @inheritdoc */
export class FavoriteGameModel implements IFavoriteGameModel {
    category: string;
    games: string[];
}

/** Favorite Game Mongo Schema Model */
export const FavoriteGames = model<IFavoriteGameDocument>('FavoriteGames', schema);
