import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TensesService {

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(public http: HttpClient) {
  }

  getTenses(): Observable<any> {
    return this.http.get(`${env.backend.host}/api/tenses/`, {headers: this.headers});
  }

  saveTense(record: any): Observable<any> {
    return this.http.post(`${env.backend.host}/api/tenses/new`, record, {headers: this.headers});
  }

  updateTense(record: any): Observable<any> {
    console.log(':::', record);
    return this.http.put(`${env.backend.host}/api/tenses/${record._id}`, record, {headers: this.headers});
  }
}
