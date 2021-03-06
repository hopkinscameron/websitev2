/** Server configuration settings model */
export default class ConfigModel {
	env: string;
	scheme: string;
    host: string;
    port: string;
    frontEnd: string;
    version: string;
    mongoUri: string;
    mongoDebug: boolean;
}
