// import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';

import { AboutCachingService } from '../services/about-caching.service';
import { AboutModel } from '../api/models/about-model';
import { AboutService } from '../api/services/about.service';

@Component({
	selector: 'about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
/** The about component for all things related to the about page. */
export class AboutComponent implements OnInit {
	loading = true;
	content: AboutModel;
	brokenUpHobbyList: string[][] = [];

	private maxList = 2;

	/**
	 * Construction to create an instance of the About Component
	 * @param {AboutService} aboutService The api service to get information about the about page
	*/
	constructor(/* private ngZone: NgZone, */private aboutCachingService: AboutCachingService, private aboutService: AboutService) { }

	/** On component initialized */
	async ngOnInit(): Promise<void> {
		// check cache first
		let content = this.aboutCachingService.loadAbout();
		if (!content) {
			content = await this.aboutService.getLatestAbout({ by: 'updated' }).toPromise();
			this.aboutCachingService.saveAbout(content);
		}

		// this.ngZone.run(() => {
		// 	if (content) {
		// 		// let's break up the list to have a maximum of {maxList} items per line
		// 		let pos = 0;
		// 		_.forEach(content.hobbies, (hobby: string) => {
		// 			if (!this.brokenUpHobbyList.length || this.brokenUpHobbyList[pos].length === this.maxList) {
		// 				this.brokenUpHobbyList.push([hobby]);
		// 				pos = this.brokenUpHobbyList[pos].length === this.maxList ? pos + 1 : pos;
		// 			} else {
		// 				this.brokenUpHobbyList[pos].push(hobby);
		// 			}
		// 		});
		// 	}

		// 	this.content = content;
		// 	this.loading = false;
		// });
	}
}
