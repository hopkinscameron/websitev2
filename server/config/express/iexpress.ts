import express from 'express';

/** Express configuration */
export default interface IExpress {
    /** The express application */
    app: express.Application;

    /** Initializes the express application */
    init(): void;
}
