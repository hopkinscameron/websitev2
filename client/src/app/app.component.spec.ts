import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { PageTitleSharedModule } from 'shared/page-title/page-title.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [RouterTestingModule, PageTitleSharedModule],
			providers: [HttpClient, HttpHandler]
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
