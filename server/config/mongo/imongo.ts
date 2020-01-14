import mongoose from 'mongoose';

/** Mongo configuration */
export default interface IMongo {
    /** Sets up a connection to mongodb */
    connect(): Promise<typeof mongoose>;
}
