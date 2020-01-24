import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			imports: [CommonModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('Constructor', () => {
		it('should create', () => {
			expect(component).toBeTruthy();
		});
	});
});
