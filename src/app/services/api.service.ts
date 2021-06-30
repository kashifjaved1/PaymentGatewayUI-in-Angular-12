import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://localhost:44343/api';

  constructor(private httpClient: HttpClient) {
  }

  processPayment(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data);
  }

}
