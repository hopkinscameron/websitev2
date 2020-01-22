import { AboutComponent } from './about/about.component';
import { ApiModule } from './api/api.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'environments/environment';

@NgModule({
	declarations: [AppComponent, AboutComponent, HeaderComponent, FooterComponent],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		RouterModule,
		AppRoutingModule,
		ApiModule.forRoot({ rootUrl: environment.apiUrl })
	],
	providers: [],
	bootstrap: [AppComponent]
})
/** The main application module. */
export class AppModule { }
