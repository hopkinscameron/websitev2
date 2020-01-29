/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ResumeDataModel } from '../models/resume-data-model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getResumeData
   */
  static readonly GetResumeDataPath = '/v1/resume-data';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResumeData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResumeData$Response(params?: {

  }): Observable<StrictHttpResponse<ResumeDataModel>> {

    const rb = new RequestBuilder(this.rootUrl, ResumeService.GetResumeDataPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResumeDataModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResumeData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResumeData(params?: {

  }): Observable<ResumeDataModel> {

    return this.getResumeData$Response(params).pipe(
      map((r: StrictHttpResponse<ResumeDataModel>) => r.body as ResumeDataModel)
    );
  }

  /**
   * Path part for operation createResumeData
   */
  static readonly CreateResumeDataPath = '/v1/resume-data';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createResumeData()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createResumeData$Response(params: {

    body: ResumeDataModel
  }): Observable<StrictHttpResponse<ResumeDataModel>> {

    const rb = new RequestBuilder(this.rootUrl, ResumeService.CreateResumeDataPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResumeDataModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createResumeData$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createResumeData(params: {

    body: ResumeDataModel
  }): Observable<ResumeDataModel> {

    return this.createResumeData$Response(params).pipe(
      map((r: StrictHttpResponse<ResumeDataModel>) => r.body as ResumeDataModel)
    );
  }

  /**
   * Path part for operation updateResumeData
   */
  static readonly UpdateResumeDataPath = '/v1/resume-data/:id';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateResumeData()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateResumeData$Response(params: {

    /**
     * The ResumeDataModel id
     */
    id: string;

    body: ResumeDataModel
  }): Observable<StrictHttpResponse<ResumeDataModel>> {

    const rb = new RequestBuilder(this.rootUrl, ResumeService.UpdateResumeDataPath, 'post');
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
        return r as StrictHttpResponse<ResumeDataModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateResumeData$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateResumeData(params: {

    /**
     * The ResumeDataModel id
     */
    id: string;

    body: ResumeDataModel
  }): Observable<ResumeDataModel> {

    return this.updateResumeData$Response(params).pipe(
      map((r: StrictHttpResponse<ResumeDataModel>) => r.body as ResumeDataModel)
    );
  }

  /**
   * Path part for operation getResume
   */
  static readonly GetResumePath = '/v1/resume';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResume()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResume$Response(params?: {

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ResumeService.GetResumePath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResume$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResume(params?: {

  }): Observable<string> {

    return this.getResume$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getCurriculumVitae
   */
  static readonly GetCurriculumVitaePath = '/v1/curriculum-vitae';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurriculumVitae()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurriculumVitae$Response(params?: {

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ResumeService.GetCurriculumVitaePath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCurriculumVitae$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurriculumVitae(params?: {

  }): Observable<string> {

    return this.getCurriculumVitae$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
