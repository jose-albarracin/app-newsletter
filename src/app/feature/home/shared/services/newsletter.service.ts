import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {}

  createSubscriptor(email: string, category: string): Observable<any> {
    return this.http.post(
      `http://localhost:8080/api/v1/subscribe/${email}/${category}`,
      {
        headers: this.headers,
      }
    );
  }

  getSubscriptor(email: string, category: string): Observable<any> {
    return this.http.get(
      `http://localhost:8080/api/v1/subscribers/${email}/${category}`,
      {
        headers: this.headers,
      }
    );
  }

  deleteSubscriptor(email: string, category: string): Observable<any> {
    return this.http.delete(
      `http://localhost:8080/api/v1/unsubscribe/${email}/${category}`,
      {
        headers: this.headers,
      }
    );
  }
}
