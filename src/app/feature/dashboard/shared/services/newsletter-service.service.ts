import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsletterServiceService {
  headers!: HttpHeaders;
  loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private newsletterData: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {}

  get getNewsletterData() {
    return this.newsletterData.asObservable();
  }

  set setNewsletterData(newsletter: any) {
    this.newsletterData.next(newsletter);
  }

  get getLoader() {
    return this.loader.asObservable();
  }

  set setLoader(loader: boolean) {
    this.loader.next(loader);
  }

  getNewsletters(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/v1/newsletters`, {
      headers: this.headers,
    });
  }

  createNewsletter(body: any): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/api/v1/newsletters`,
      body,
      {
        headers: this.headers,
      }
    );
  }

  updateNewsletter(body: any): Observable<any> {
    return this.http.put<any>(
      `http://localhost:8080/api/v1/newsletters`,
      body,
      {
        headers: this.headers,
      }
    );
  }

  sendNewsletter(id: string): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/api/v1/newsletters/send/${id}`,
      {
        headers: this.headers,
      }
    );
  }

  deleteNewsletter(id: string): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/api/v1/newsletters/${id}`,
      {
        headers: this.headers,
      }
    );
  }
}
