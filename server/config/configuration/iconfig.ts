import ConfigModel from './models/config.model';

/** Server configuration settings class that will handle the setup/retrieval of configurations */
export default interface IConfig {
    /** The configuration settings */
    config: ConfigModel;
    /** The globbed route files */
    routes: string[];
}
