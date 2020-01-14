import Config from './config/configuration/config';
import Express from './config/express/express';
import IConfig from './config/configuration/iconfig';
import IExpress from './config/express/iexpress';
import IMongo from './config/mongo/imongo';
import Mongo from './config/mongo/mongo';

let config: IConfig;
let express: IExpress;
let mongo: IMongo;
start();


/** Starts the server */
async function start(): Promise<void> {
	try {
		config = new Config();
		express = new Express();
		mongo = new Mongo();
	} catch (err) {
		console.error(err);
	}

	// module.parent check is required to support mocha watch
	// src: https://github.com/mochajs/mocha/issues/1912
	if (!module.parent) {
		try {
			await mongo.connect();

			express.app.listen(config.config.port, () => {
				// eslint-disable-next-line no-console
				console.info(`server started on ${config.config.host}:${config.config.port} (${config.config.env})`);
			});
		} catch (err) {
			console.error(err);
		}
	}
}

export default express.app;
