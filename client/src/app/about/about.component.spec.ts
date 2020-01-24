import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AboutCachingService } from 'app/services/about-caching.service';
import { AboutComponent } from './about.component';
import { AboutService } from 'app/api/services/about.service';
import { HttpClient } from '@angular/common/http';
import { PageTitleSharedModule } from 'shared/page-title/page-title.module';
// import { NgZone } from '@angular/core';
import { of } from 'rxjs';

describe('AboutComponent', () => {
	let component: AboutComponent;
	let fixture: ComponentFixture<AboutComponent>;

	let mockNGZone: any;
	let mockAboutCachingService: any;
	let mockAboutService: any;

	beforeEach(async(() => {
		mockNGZone = jasmine.createSpyObj('mockNGZone', ['run']);
		mockNGZone.run.and.callThrough();

		mockAboutCachingService = jasmine.createSpyObj('mockAboutCachingService', ['loadAbout', 'saveAbout']);
		mockAboutCachingService.loadAbout.and.returnValue(null);
		mockAboutCachingService.saveAbout.and.callFake(() => { /* function was called */ });

		mockAboutService = jasmine.createSpyObj('mockAboutService', ['getLatestAbout']);
		mockAboutService.getLatestAbout.and.returnValue(of(null));

		TestBed.configureTestingModule({
			declarations: [AboutComponent],
			imports: [PageTitleSharedModule],
			providers: [
				HttpClient,
				// { provide: NgZone, useValue: mockNGZone },
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
});
