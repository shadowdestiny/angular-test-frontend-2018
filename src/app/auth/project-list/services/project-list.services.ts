import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Project} from '../models/project.models';


@Injectable()
export class ProjectListservices {
  projects: Array<Project> = [];

  constructor(private _http: Http) {

  }

  getAll(): Observable<Array<Project>> {
    const url = 'http://projects-api.webtraining.zone/projects';
    const headers = new Headers({
      'Content-Type': 'application/json',
      // @FIXME: Este token se debe leer desde el Session Storage
      'Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80iqnk0skp9Jp6NQ3'
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this._http.get( url, options ).map((response) => {
      console.log(response);
      return response.json();
    });
  }
}
