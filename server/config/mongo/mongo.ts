import Config from '../configuration/config';
import Debug from 'debug';
import IMongo from './imongo';
import mongoose from 'mongoose';
import util from 'util';

/** @inheritdoc */
export default class Mongo implements IMongo {
    private config = new Config();
    private debug = new Debug('express-mongoose-es6-rest-api:index');

    /** @inheritdoc */
    connect(): Promise<void> {
    	if (this.config.config.mongoDebug) {
    		mongoose.set('debug', (collectionName, method, query, doc) => {
    			this.debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
    		});
    	}

    	return mongoose.connect(this.config.config.mongoUri, { keepAlive: 1, useNewUrlParser: true, useUnifiedTopology: true });
    }
}
