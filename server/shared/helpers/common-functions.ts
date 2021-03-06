import _ from 'lodash';
import moment from 'moment';

moment().format();

/** Common helper functions */
export default class CommonFunctions {
	/**
     * Gets the time difference in a string format between two dates
     * @param {Date} startDateTime the first date
     * @param {Date} endDateTime the second date
     * @returns {string} The string of the time difference
     */
	static timeDifference(startDateTime: Date, endDateTime: Date): string {
		let diffStr = '';

		if (startDateTime && endDateTime) {
			const timeArr: string[] = [];
			const startMoment = moment(startDateTime);
			const endMoment = moment(endDateTime);
			const milli = endMoment.diff(startMoment, 'milliseconds');
			const secs = endMoment.diff(startMoment, 'seconds');
			const mins = endMoment.diff(startMoment, 'minutes');
			const hrs = endMoment.diff(startMoment, 'hours');

			if (hrs) {
				timeArr.push(`${hrs} hour${hrs > 1 ? 's' : ''}`);
			}

			if (mins) {
				timeArr.push(`${mins} minute${mins > 1 ? 's' : ''}`);
			}

			if (secs) {
				timeArr.push(`${secs} second${secs > 1 ? 's' : ''}`);
			}

			if (milli) {
				timeArr.push(`${milli} millisecond${milli > 1 ? 's' : ''}`);
			}

			diffStr = _.join(timeArr, ', ');
		}

		return diffStr;
	}

	/**
     * Gets the time difference in a string format between two dates
     * @param {any} _doc the document
     * @param {any} ret the model
	 * @param {any} options the options for the transformation
     * @returns {any} The model
     */
	static transformModel(_doc: any, ret: any, options: any): any {
		ret.id = ret._id;

		// always delete id
		delete ret['_id'];

		if (options.hide) {
			_.forEach(options.hide.split(' '), (prop) => {
				delete ret[prop];
			});
		}

		return ret;
	};
}
