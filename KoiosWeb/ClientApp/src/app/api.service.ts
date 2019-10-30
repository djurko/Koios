import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Settlement } from './settlement';
import { Country } from './country';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api/settlements";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getSettlements(page?: number): Observable<Settlement[]> {
    console.log(page);
    return this.http.get<Settlement[]>(apiUrl /*+ `?page=${page}`*/)
      .pipe(
        tap(settlements => console.log('fetched settlements')),
        catchError(this.handleError('getSettlements', []))
      );
  }
  
  getSettlement(id: number): Observable<Settlement> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Settlement>(url).pipe(
      tap(id => console.log(`fetched settlement id=${id}`)),
      catchError(this.handleError<Settlement>(`getSettlement id=${id}`))
    );
  }
  
  addSettlement(settlement): Observable<Settlement> {
    return this.http.post<Settlement>(apiUrl, settlement, httpOptions).pipe(
      tap((settlement: Settlement) => console.log(`added settlement w/ id=${settlement.settlementId}`)),
      catchError(this.handleError<Settlement>('addSettlement'))
    );
  }
  
  updateSettlement(id, settlement): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, settlement, httpOptions).pipe(
      tap(_ => console.log(`updated settlement id=${id}`)),
      catchError(this.handleError<any>('updateSettlement'))
    );
  }
  
  deleteSettlement(id): Observable<Settlement> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Settlement>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted settlement id=${id}`)),
      catchError(this.handleError<Settlement>('deleteSettlement'))
    );
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>("/api/countries")
      .pipe(
        tap(countries => console.log('fetched countries')),
        catchError(this.handleError('getCountries', []))
      );
  }

  getSettlementsCount(): Observable<any> {
    const url = apiUrl + "/count";
    return this.http.get(url).pipe(
      tap(_ => console.log('fetched number of settlements')),
      catchError(this.handleError<any>('updateSettlement'))
    );
  }
}
