import { Document, Model, Schema, model } from 'mongoose';

import CommonFunctions from '../../../shared/helpers/common-functions';

const schema = new Schema({
	text: { required: true, type: String }
}, { timestamps: true });

if (!schema['options'].toObject) schema['options'].toObject = {};
schema.set('toObject', { versionKey: false });
schema.set('toObject', { versionKey: false });
schema['options'].toObject.transform = CommonFunctions.transformModel;

/** The resume data model */
export interface IResumeDataModel {
    text: string;
}

/** @inheritdoc */
export interface IResumeDocument extends IResumeDataModel, Document { }

/** @inheritdoc */
export class ResumeDataModel implements IResumeDataModel {
    text: string;
}

/** Resume Data Mongo Schema Model */
export const ResumeData: Model<IResumeDocument> = model<IResumeDocument>('ResumeData', schema);
