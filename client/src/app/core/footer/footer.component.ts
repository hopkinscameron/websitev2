import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
/** The footer component. */
export class FooterComponent {
	/**
	 * Returns the current year to display for the copyright
	 * @returns {string} The current year
	 */
	currentYear(): string {
		return `${new Date().getFullYear()}`;
	}
}
