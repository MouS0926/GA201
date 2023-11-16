import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs"
import {map,catchError} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/users'

  constructor(private http:HttpClient) { }

  register(username: string, email: string, password: string): Observable<any> {
    const userData = { username, email, password };

    // Make a request to your API for registration
    return this.http.post<any>(this.apiUrl, userData).pipe(
      map((user) => user), // Return user data on success
      catchError((error) => {
        // Handle error (e.g., display a message or log it)
        console.error('Registration failed:', error);
        return of(null);
      })
    );
  }

  getUsers(): Observable<any[]> {
    // Implement your user list retrieval API call
    return this.http.get<any[]>(this.apiUrl);
  }



}
