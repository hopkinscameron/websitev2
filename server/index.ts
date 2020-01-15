import CommonFunctions from './helpers/common-functions';
/* eslint-disable max-statements */
/* eslint-disable no-console */
import Config from './config/configuration/config';
import Express from './config/express/express';
import IConfig from './config/configuration/iconfig';
import IExpress from './config/express/iexpress';
import IMongo from './config/mongo/imongo';
import Mongo from './config/mongo/mongo';
import clc from 'cli-color';

let config: IConfig;
let express: IExpress;
let mongo: IMongo;
const lineBreak = '------------------------';
start();


/** Starts the server */
async function start(): Promise<void> {
	try {
		console.log(lineBreak);
		console.log(clc.cyan('Configuring the environment'));
		let startDateTime = new Date();

		config = new Config();

		let endDateTime = new Date();
		console.log(clc.green(`Environment configured successfully (took ${CommonFunctions.timeDifference(startDateTime, endDateTime)})`));
		console.log(lineBreak);
		startDateTime = new Date();

		console.log(lineBreak);
		console.log(clc.cyan('Configuring Express'));

		express = new Express();

		endDateTime = new Date();
		console.log(clc.green(`Express configured successfully (took ${CommonFunctions.timeDifference(startDateTime, endDateTime)})`));
		console.log(lineBreak);

		console.log(lineBreak);
		console.log(clc.cyan('Configuring Mongo'));
		startDateTime = new Date();

		mongo = new Mongo();

		endDateTime = new Date();
		console.log(clc.green(`Mongo configured successfully (took ${CommonFunctions.timeDifference(startDateTime, endDateTime)})`));
		console.log(lineBreak);
	} catch (err) {
		console.error(err);
	}

	// module.parent check is required to support mocha watch
	// src: https://github.com/mochajs/mocha/issues/1912
	if (!module.parent) {
		try {
			console.log(lineBreak);
			console.log(clc.cyan('Connecting to MongoDB'));

			await mongo.connect();

			console.log(clc.green('MongoDB connected successfully'));
		    console.log(lineBreak);

			console.log(lineBreak);
			console.log(clc.cyan('Starting application'));

			express.app.listen(config.config.port, () => {
				console.log(clc.green(`server started on ${config.config.host}:${config.config.port} (${config.config.env})`));
			});
		} catch (err) {
			console.error(err);
		}
	}
}

export default express.app;
