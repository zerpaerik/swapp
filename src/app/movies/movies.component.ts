import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie;
  cols = Movie.cols;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
      .subscribe(this.setMovies);
  }

  setMovies = (movies: Movie) => {
    this.movies = movies;
  }

}
