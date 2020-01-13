import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HomeComponent]
		})
			.compileComponents();
	}));

	it('should create the home component', () => {
		const fixture = TestBed.createComponent(HomeComponent);
		const component = fixture.componentInstance;
		expect(component).toBeTruthy();
	});
});
