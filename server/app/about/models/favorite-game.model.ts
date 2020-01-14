import { Document, Model, Schema, model } from 'mongoose';

const schema = new Schema({
	category: { required: true, type: String },
	game: { required: true, type: String }
});

/**
 * The favorite game model
 * @swagger
 * definitions:
 *   FavoriteGameModel:
 *     properties:
 *       category:
 *         type: string
 *       game:
 *         type: string
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
export const FavoriteGames: Model<IFavoriteGameDocument> = model<IFavoriteGameDocument>('FavoriteGame', schema);
