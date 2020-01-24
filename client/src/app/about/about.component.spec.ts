import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AboutCachingService } from 'app/services/about-caching.service';
import { AboutComponent } from './about.component';
import { AboutService } from 'app/api/services/about.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageTitleSharedModule } from 'shared/page-title/page-title.module';
import { of } from 'rxjs';

describe('AboutComponent', () => {
	let component: AboutComponent;
	let fixture: ComponentFixture<AboutComponent>;

	let mockAboutCachingService: any;
	let mockAboutService: any;

	beforeEach(async(() => {
		mockAboutCachingService = jasmine.createSpyObj('mockAboutCachingService', ['loadAbout', 'saveAbout']);
		mockAboutCachingService.loadAbout.and.returnValue(null);
		mockAboutCachingService.saveAbout.and.callFake(() => { /* function was called */ });

		mockAboutService = jasmine.createSpyObj('mockAboutService', ['getLatestAbout']);
		mockAboutService.getLatestAbout.and.returnValue(of(null));

		TestBed.configureTestingModule({
			declarations: [AboutComponent],
			imports: [HttpClientTestingModule, PageTitleSharedModule],
			providers: [
				{ provide: AboutCachingService, useValue: mockAboutCachingService },
				{ provide: AboutService, useValue: mockAboutService }
			]
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

	describe('ngOnInit', () => {
		beforeEach(() => {
			component.ngOnInit();
		});

		it('should load from cache first', () => {
			expect(mockAboutCachingService.loadAbout).toHaveBeenCalled();
		});

		it('should load from backend and cache', async(() => {
			fixture.whenStable().then(() => {
				expect(mockAboutService.getLatestAbout).toHaveBeenCalled();
				expect(mockAboutCachingService.saveAbout).toHaveBeenCalled();
			});
		}));

		// TODO: change the spy to return data
		// it('should not load from backend', () => {
		// 	const model: AboutModel = { bio: '' };
		// 	mockAboutCachingService.loadAbout.and.returnValue(model);
		// 	component.ngOnInit();
		// 	expect(mockAboutService.getLatestAbout).not.toHaveBeenCalled();
		// });
	});
});
