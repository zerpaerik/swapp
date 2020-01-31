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

  getPlanets(): Observable<Planet> {
    return this.http.get<Planet>("https://swapi.co/api/planets/");
  }

  getCharacters(urls: Array<string>): Observable<any> {
    const requests = urls.map(url => this.http.get(url));
    return forkJoin(requests);
  }

}
