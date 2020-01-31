import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
    
  }

  getMovies(): Observable<Movie> {
    return this.http.get<Movie>("https://swapi.co/api/films/");
  }

  getCharacters(urls: Array<string>): Observable<any> {
    const requests = urls.map(url => this.http.get(url));
    return forkJoin(requests);
  }

}
