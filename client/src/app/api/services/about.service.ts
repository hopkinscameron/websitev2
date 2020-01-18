/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AboutModel } from '../models/about-model';

@Injectable({
  providedIn: 'root',
})
export class AboutService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createAbout
   */
  static readonly CreateAboutPath = '/v1/about';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAbout()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAbout$Response(params: {

    body: AboutModel
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AboutService.CreateAboutPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createAbout$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAbout(params: {

    body: AboutModel
  }): Observable<void> {

    return this.createAbout$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAbout
   */
  static readonly GetAboutPath = '/v1/about/:id';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAbout()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAbout$Response(params: {

    /**
     * The AboutModel id
     */
    : string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AboutService.GetAboutPath, 'get');
    if (params) {

      rb.path('', params.);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAbout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAbout(params: {

    /**
     * The AboutModel id
     */
    : string;

  }): Observable<void> {

    return this.getAbout$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateAbout
   */
  static readonly UpdateAboutPath = '/v1/about/:id';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAbout()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAbout$Response(params: {

    body: AboutModel
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AboutService.UpdateAboutPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAbout$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAbout(params: {

    body: AboutModel
  }): Observable<void> {

    return this.updateAbout$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
