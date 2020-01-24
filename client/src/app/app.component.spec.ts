import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageTitleSharedModule } from 'shared/page-title/page-title.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [HttpClientTestingModule, RouterTestingModule, PageTitleSharedModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('Constructor', () => {
		it('should create', () => {
			expect(component).toBeTruthy();
		});
	});
});
