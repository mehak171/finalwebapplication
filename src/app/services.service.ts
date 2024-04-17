import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pet } from '../models/pet';  // Make sure this path is correct
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private dataUrl = '/assets/data/pet-data.json'; // Local JSON file

  constructor(private http: HttpClient) { }

  getPetData(): Observable<Pet> {
    return this.http.get<Pet>(this.dataUrl).pipe(
      catchError(this.handleError<Pet>('getPetData', undefined))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
