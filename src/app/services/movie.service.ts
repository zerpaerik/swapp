import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private errorSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    
  }

  getMovies(): Observable<Movie> {
    return this.http.get<Movie>("https://swapi.co/api/films/");
  }

  getCharacter(url:string): Observable<any> {
    return this.http.get(url);
  }

  sendError({message, error, status}){
    this.errorSubject.next({message, error, status});
  }

  onAnyError(): Observable<any> {
    return this.errorSubject.asObservable();
  }

}
