import ResumeController from './resume.controller';
import asyncHandler from 'express-async-handler';
import express from 'express';

/** The resume routes */
export default class ResumeRoutes {
    /** The express router for the resume routes */
    readonly router = express.Router();

    private resumeController = new ResumeController();

    /** Initializes a new instance of the ResumeRoutes class */
    constructor() {
    	this.router.route('/v1/resume-data')
    		.get(asyncHandler(this.resumeController.getResumeData))
    		.post(asyncHandler(this.resumeController.createResumeData));

    	this.router.route('/v1/resume-data/:id')
    		.post(asyncHandler(this.resumeController.updateResumeData));

    	// bind the middleware
    	this.router.param('id', asyncHandler(this.resumeController.resumeDataById));

    	this.router.route('/v1/resume')
    		.get(asyncHandler(this.resumeController.getResume));

    	this.router.route('/v1/curriculum-vitae')
    		.get(asyncHandler(this.resumeController.getCurriculumVitae));
    }
}
