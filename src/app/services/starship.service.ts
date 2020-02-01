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

  getStarships(url:string): Observable<Starship> {
    return this.http.get<Starship>(url);
  }

}
