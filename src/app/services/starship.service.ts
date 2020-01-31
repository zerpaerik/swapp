import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starship } from '../models/starship';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) {
    
  }

  getStarships(): Observable<Starship> {
    return this.http.get<Starship>("https://swapi.co/api/starships/");
  }

  getCharacters(urls: Array<string>): Observable<any> {
    const requests = urls.map(url => this.http.get(url));
    return forkJoin(requests);
  }

}
