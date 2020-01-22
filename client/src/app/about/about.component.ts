import { Component, OnInit } from '@angular/core';

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

	/**
	 * Construction to create an instance of the About Component
	 * @param {AboutService} aboutService The api service to get information about the about page
	*/
	constructor(private aboutService: AboutService) { }

	/**
	 * On component initialized
	*/
	async ngOnInit(): Promise<void> {
		this.content = await this.aboutService.getLatestAbout({ by: 'updated' }).toPromise();
		this.loading = false;
	}
}
