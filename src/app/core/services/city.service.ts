import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CITIES } from 'src/app/mocks/cities.mock';
import { City } from '../interfaces/city';
import {HandleError, HttpErrorHandler} from '../../error.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private url = "http://localhost:3000/data";

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('CityService');
  }

  // example API call
  // getCities(): Array<City> {
  //   return CITIES;
  // }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.url)
    .pipe(
     catchError(this.handlerError<City[]>('getCities', []))
    );
  }


  //constructor() { }
}
