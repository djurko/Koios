import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "/api/settlements";
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
    getSettlements(page) {
        console.log(page);
        return this.http.get(apiUrl /*+ `?page=${page}`*/)
            .pipe(tap(settlements => console.log('fetched settlements')), catchError(this.handleError('getSettlements', [])));
    }
    getSettlement(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url).pipe(tap(id => console.log(`fetched settlement id=${id}`)), catchError(this.handleError(`getSettlement id=${id}`)));
    }
    addSettlement(settlement) {
        return this.http.post(apiUrl, settlement, httpOptions).pipe(tap((settlement) => console.log(`added settlement w/ id=${settlement.settlementId}`)), catchError(this.handleError('addSettlement')));
    }
    updateSettlement(id, settlement) {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, settlement, httpOptions).pipe(tap(_ => console.log(`updated settlement id=${id}`)), catchError(this.handleError('updateSettlement')));
    }
    deleteSettlement(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.delete(url, httpOptions).pipe(tap(_ => console.log(`deleted settlement id=${id}`)), catchError(this.handleError('deleteSettlement')));
    }
    getCountries() {
        return this.http.get("/api/countries")
            .pipe(tap(countries => console.log('fetched countries')), catchError(this.handleError('getCountries', [])));
    }
    getSettlementsCount() {
        const url = apiUrl + "/count";
        return this.http.get(url).pipe(tap(_ => console.log('fetched number of settlements')), catchError(this.handleError('updateSettlement')));
    }
};
ApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map