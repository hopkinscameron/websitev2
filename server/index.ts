import Config from './config/configuration/config';
import Express from './config/express/express';

const config = new Config();
const express = new Express();

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
	express.app.listen(config.config.port, () => {
		// eslint-disable-next-line no-console
		console.info(`server started on ${config.config.host}:${config.config.port} (${config.config.env})`);
	});
}

export default express.app;
