import { ICacheModel } from 'app/models/cache.model';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
/** The chaching service to prevent too many requests to the server if not needed. */
export class CachingService {
	/**
	 * Saves the data to cache
	 * @param {string} key the key of this item
	 * @param {string} data the data to save, stringified
	 * @param {number} expirationInMinutes the expiration date in minutes
	 */
	save(key: string, data: string, expirationInMinutes: number): void {
		const record: ICacheModel = {
			data,
			expiration: expirationInMinutes ? new Date(new Date().getTime() + expirationInMinutes) : null
		};

		localStorage.setItem(key, JSON.stringify(record));
	}

	/**
	 * Loads the data from cache
	 * @param {string} key the key to get data based off of
	 * @returns {string} The data from cache (null if expired or doesn't exist)
	 */
	load(key: string): string {
		const item = localStorage.getItem(key);
		if (item !== null) {
			const record: ICacheModel = JSON.parse(item);

			// expired data will return null
			if (!record || (record.expiration && new Date(record.expiration) > new Date())) {
				return null;
			}

			return record.data;
		}

		return null;
	}

	/**
	 * Removes data from cache
	 * @param {string} key the key to remove data based off of
	 */
	remove(key: string): void {
		localStorage.removeItem(key);
	}

	/** Removes ALL data from cache */
	cleanLocalStorage(): void {
		localStorage.clear();
	}
}
