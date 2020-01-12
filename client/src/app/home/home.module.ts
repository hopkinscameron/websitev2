import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [HomeComponent],
	imports: [HomeRoutingModule]
})
/** The home module for all things related to the home page. */
export class HomeModule { }
