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

  getSpecies(url:string): Observable<Specie> {
    return this.http.get<Specie>(url);
  }

}
