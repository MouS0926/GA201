import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3001/users'
  constructor(private http:HttpClient) { }

  addUser(user:any):Observable<any>{
    return this.http.post(this.apiUrl, user);
  }

  checkUsername(username: string): Observable<boolean> {
    const url = `${this.apiUrl}/check-username?username=${username}`;
    return this.http.get<boolean>(url);
  }
}
