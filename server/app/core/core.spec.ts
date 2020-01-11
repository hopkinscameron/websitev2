import CoreController from './core.controller';

describe('CoreController', () => {
	const coreController = new CoreController();
	const req = {};
	const res = { json: jasmine.createSpy('json') };

	it('should return health check success', () => {
		coreController.healthCheck(req, res);
		expect(res.json).toHaveBeenCalledTimes(1);
	});
});
