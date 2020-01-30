import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
    
  }

  getMovies(): Observable<Movie> {
    return this.http.get<Movie>("https://swapi.co/api/films/");
  }

}
