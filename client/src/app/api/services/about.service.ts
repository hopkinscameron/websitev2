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
  }): Observable<StrictHttpResponse<AboutModel>> {

    const rb = new RequestBuilder(this.rootUrl, AboutService.CreateAboutPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AboutModel>;
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
  }): Observable<AboutModel> {

    return this.createAbout$Response(params).pipe(
      map((r: StrictHttpResponse<AboutModel>) => r.body as AboutModel)
    );
  }

  /**
   * Path part for operation getLatestAbout
   */
  static readonly GetLatestAboutPath = '/v1/about/latest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLatestAbout()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLatestAbout$Response(params?: {

    /**
     * Latest by either created date or last updated
     */
    by?: 'created' | 'updated';

  }): Observable<StrictHttpResponse<AboutModel>> {

    const rb = new RequestBuilder(this.rootUrl, AboutService.GetLatestAboutPath, 'get');
    if (params) {

      rb.query('by', params.by);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AboutModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getLatestAbout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLatestAbout(params?: {

    /**
     * Latest by either created date or last updated
     */
    by?: 'created' | 'updated';

  }): Observable<AboutModel> {

    return this.getLatestAbout$Response(params).pipe(
      map((r: StrictHttpResponse<AboutModel>) => r.body as AboutModel)
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
    id: string;

  }): Observable<StrictHttpResponse<AboutModel>> {

    const rb = new RequestBuilder(this.rootUrl, AboutService.GetAboutPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AboutModel>;
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
    id: string;

  }): Observable<AboutModel> {

    return this.getAbout$Response(params).pipe(
      map((r: StrictHttpResponse<AboutModel>) => r.body as AboutModel)
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

    /**
     * The AboutModel id
     */
    id: string;

    body: AboutModel
  }): Observable<StrictHttpResponse<AboutModel>> {

    const rb = new RequestBuilder(this.rootUrl, AboutService.UpdateAboutPath, 'post');
    if (params) {

      rb.path('id', params.id);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AboutModel>;
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

    /**
     * The AboutModel id
     */
    id: string;

    body: AboutModel
  }): Observable<AboutModel> {

    return this.updateAbout$Response(params).pipe(
      map((r: StrictHttpResponse<AboutModel>) => r.body as AboutModel)
    );
  }

}
