import * as _ from 'lodash';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
/** The api interceptor to handle global things. */
export class ApiInterceptor implements HttpInterceptor {
	/**
	 * Saves the about data to cache
	 * @param {HttpRequest<any>} req the incoming/outgoing request
	 * @param {HttpHandler} next the next http handler
	 * @returns {Observable<HttpEvent<any>>} The http event
	 */
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(_.tap(x => x, (err) => {
			if (err instanceof HttpResponse) {
				// handle this err
				console.error(`Error performing request, status code = ${err.status}`);
			}
		}));
	}
}
