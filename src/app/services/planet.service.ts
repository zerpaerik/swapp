import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../models/planet';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) {
    
  }

  getPlanets(url:string): Observable<Planet> {
    return this.http.get<Planet>(url);
  }

}
