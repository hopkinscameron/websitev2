import { Component, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
/** The home component for all things related to the home page. */
export class HomeComponent implements OnInit {
	height = 0;

	/**
	 * On window resize
	 */
	@HostListener('window:resize', ['$event'])
	onResize(): void {
		this.height = window.document.documentElement.clientHeight;
	}

	/**
	 * On component initialized
	*/
	ngOnInit(): void {
		this.height = window.document.documentElement.clientHeight;
	}
}
