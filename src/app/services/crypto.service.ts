import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor(private http: HttpClient) {}

  getName(): Observable<any> {
    const url = 'https://api.coingecko.com/api/v3/search/trending';
    return this.http.get<any>(url);
  }
}
