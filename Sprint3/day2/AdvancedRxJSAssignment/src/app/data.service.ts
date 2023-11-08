import { Injectable } from '@angular/core';
import { Observable,interval } from 'rxjs';
import { take, map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

    private dataObservable:Observable<number>

  constructor() { 

    this.dataObservable = interval(1000).pipe(
      take(5), // Emit data 5 times
      map(() => {
        // Simulate potential error
        if (Math.random() < 0.2) {
          throw new Error('Random Error Occurred');
        }
        return Math.random();
      }),
      catchError(error => {
        console.error('Error:', error.message);
        throw error; // Re-throw the error to propagate it downstream
      })
    );

  
  }


  getDataObservable(): Observable<number> {
    return this.dataObservable;
  }
}
