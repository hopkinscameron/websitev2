import { AboutModel } from '../api/models/about-model';
import { CachingService } from './caching.service';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
/** The chaching service to prevent too many requests to the server if not needed. */
export class AboutCachingService extends CachingService {
	private key = 'key-about';

	/**
	 * Saves the about data to cache
	 * @param {AboutModel} data the data to cache
	 */
	saveAbout(data: AboutModel): void {
		super.save(this.key, JSON.stringify(data), environment.caching.about);
	}

	/**
	 * Loads the about data from cache
	 * @returns {AboutModel} The data from cache
	 */
	loadAbout(): AboutModel {
		const data = super.load(this.key);
		return JSON.parse(data) as AboutModel;
	}

	/**
	 * Removes the about data from cache
	 */
	remove(): void {
		localStorage.removeItem(this.key);
	}
}
