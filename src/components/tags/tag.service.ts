import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWExYmI0N2JjMDYxYzg2ZTk3YjU5YTYiLCJpYXQiOjE3MDUwOTgwODF9.UnTxUwnZhU859nfZtxp00x80ZmVjsRVhXbpznuoWmZw',
    }),
  };

  constructor(private http: HttpClient) {}

  saveTag(tagData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/tags/add', tagData, this.httpOptions);
  }
  getTags(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/tags/getTag', this.httpOptions);
  }
  editTag(id : String, tagData : any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/tags/${id}/update`, tagData, this.httpOptions);
  }
  deleteTag(id : String): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/tags/${id}/delete`, this.httpOptions);
  }
}
