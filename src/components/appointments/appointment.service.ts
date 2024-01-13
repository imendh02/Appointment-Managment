import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWExYmI0N2JjMDYxYzg2ZTk3YjU5YTYiLCJpYXQiOjE3MDUwOTgwODF9.UnTxUwnZhU859nfZtxp00x80ZmVjsRVhXbpznuoWmZw',
    }),
  };

  constructor(private http: HttpClient) {}
  saveEvent(event: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/events', event, this.httpOptions);
  }
}
