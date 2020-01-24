import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Provider, forwardRef } from '@angular/core';

import { AboutCachingService } from './services/about-caching.service';
import { AboutComponent } from './about/about.component';
import { ApiInterceptor } from './services/api-interceptor.service';
import { ApiModule } from './api/api.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { PageTitleSharedModule } from '../shared/page-title/page-title.module';
import { RouterModule } from '@angular/router';
import { environment } from 'environments/environment';

export const API_INTERCEPTOR_PROVIDER: Provider = {
	provide: HTTP_INTERCEPTORS,
	useExisting: forwardRef(() => ApiInterceptor),
	multi: true
};

@NgModule({
	declarations: [AppComponent, AboutComponent, HeaderComponent, FooterComponent],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		RouterModule,
		AppRoutingModule,
		ApiModule.forRoot({ rootUrl: environment.apiUrl }),
		PageTitleSharedModule
	],
	providers: [
		AboutCachingService,
		ApiInterceptor,
		API_INTERCEPTOR_PROVIDER
	],
	bootstrap: [AppComponent]
})
/** The main application module. */
export class AppModule { }
