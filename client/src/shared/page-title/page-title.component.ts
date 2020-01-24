import { Component, Input } from '@angular/core';

@Component({
	selector: 'page-title',
	templateUrl: './page-title.component.html',
	styleUrls: ['./page-title.component.scss']
})
/** Shared component used to display a header title on a page. */
export class PageTitleComponent {
	@Input() title = '';
}
