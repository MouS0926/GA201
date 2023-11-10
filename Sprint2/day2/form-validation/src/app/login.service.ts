import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {
  private apiUrl = 'http://localhost:3001/users';
  constructor(private http: HttpClient) { }

loginUser(email: string, password: string): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
