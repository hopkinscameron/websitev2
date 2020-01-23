import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageTitleComponent } from './page-title.component';

@NgModule({
	declarations: [PageTitleComponent],
	imports: [CommonModule],
	exports: [PageTitleComponent]
})
/** The page title module used to import all things related to the shared page component. */
export class PageTitleSharedModule { }
