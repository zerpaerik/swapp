import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  movies: Movie;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe(movies => this.setMovies(movies), err => this.onGetMoviesError(err));
  }

  onGetMoviesError (error) {
    console.error(error);
  }

  setMovies (movies: Movie) {
    this.movies = movies;
  }
}
