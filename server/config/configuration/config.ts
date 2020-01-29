import * as dotenv from 'dotenv';

import ConfigModel from './models/config.model';
import IConfig from './iconfig';
import _ from 'lodash';
import glob from 'glob';

/** @inheritdoc */
export default class Config implements IConfig {
    /** @inheritdoc */
    readonly config = new ConfigModel();
    /** @inheritdoc */
    readonly routes: string[] = [];

    /** Initializes a new instance of the Config class */
    constructor() {
    	// init environment
    	this.initEnvironment();

    	// init routes
    	this.routes = this.getGlobbedPaths(['**/*.routes.ts']);
    }

    /** Initializes the environment configurations */
    private initEnvironment(): void {
    	dotenv.config();

    	this.config.env = process.env.NODE_ENV;
    	this.config.scheme = process.env.SCHEME;
    	this.config.host = process.env.HOST;
    	this.config.port = process.env.PORT;
    	this.config.frontEnd = process.env.FRONTEND;
    	this.config.version = process.env.VERSION;
    	this.config.mongoUri = process.env.MONGO_URI;
    	// only allow mongoose logs in dev env
    	this.config.mongoDebug = _.lowerCase(this.config.env) === 'development' ? _.lowerCase(process.env.MONGO_DEBUG) === 'true' : false;
    }

    /**
     * Gets all file paths by glob pattern, excludes from the exclusion list
     * @param {any} globPatterns the glob patters to find files based on
     * @param {any} excludes the excluded glob patters
     * @returns {string[]} the paths found by the glob pattern minus excluded files
     */
    private getGlobbedPaths(globPatterns: any, excludes: any = null): string[] {
    	// URL paths regex
    	const urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');

    	// the output array
    	let output = [];

    	// if glob pattern is array then we use each pattern in a recursive way, otherwise we use glob
    	if (_.isArray(globPatterns)) {
    		_.forEach(globPatterns, (globPattern) => {
    			output = _.union(output, this.getGlobbedPaths(globPattern, excludes));
    		});
    	} else if (_.isString(globPatterns)) {
    		if (urlRegex.test(globPatterns)) {
    			output.push(globPatterns);
    		} else {
    			let files: string[] = glob.sync(globPatterns);

    			if (excludes) {
    				files = _.map(files, (file) => {
    					let replacedFile = '';
    					if (_.isArray(excludes)) {
    						for (const i in excludes) {
    							if (excludes.hasOwnProperty(i)) {
    								replacedFile = file.replace(excludes[i], '');
    							}
    						}
    					} else {
    						replacedFile = file.replace(excludes, '');
    					}

    					return replacedFile;
    				});
    			}

    			output = _.union(output, files);
    		}
    	}

    	return output;
    };
}
