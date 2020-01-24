import { Document, Model, Schema, model } from 'mongoose';

import CommonFunctions from '../../../shared/helpers/common-functions';
import { IFavoriteGameModel } from './favorite-game.model';

const schema = new Schema({
	bio: { required: true, type: String },
	hobbies: { type: [String] },
	favoriteGames: [{
		type: Schema.Types.ObjectId,
		ref: 'FavoriteGames'
	}]
}, { timestamps: true });

if (!schema['options'].toObject) schema['options'].toObject = {};
schema.set('toObject', { versionKey: false });
schema.set('toObject', { versionKey: false });
schema['options'].toObject.transform = CommonFunctions.transformModel;

/** The about model */
export interface IAboutModel {
    bio: string;
    hobbies?: string[];
    favoriteGames?: IFavoriteGameModel[];
}

/** @inheritdoc */
export interface IAboutDocument extends IAboutModel, Document { }

/** @inheritdoc */
export class AboutModel implements IAboutModel {
    bio: string;
    hobbies?: string[];
    favoriteGames?: IFavoriteGameModel[];
}

/** About Mongo Schema Model */
export const Abouts: Model<IAboutDocument> = model<IAboutDocument>('Abouts', schema);
