import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specie } from '../models/specie';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  constructor(private http: HttpClient) {
    
  }

  getSpecies(): Observable<Specie> {
    return this.http.get<Specie>("https://swapi.co/api/species/");
  }

  getCharacters(urls: Array<string>): Observable<any> {
    const requests = urls.map(url => this.http.get(url));
    return forkJoin(requests);
  }

}
