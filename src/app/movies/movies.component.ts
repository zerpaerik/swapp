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
  showOpening = false;
  openingTimeOut;
  openingConfig: {stars: number|0, opening_crawl:string, episode:string|number, title:string, show: boolean};
  showCharacters = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
      .subscribe(this.setMovies);
      this.openingConfig = {title:'', episode:'', opening_crawl:'', stars: 0, show: false};
  }

  movieRowClicked(e:any) {
    switch (e.col.key) {
      case "title":
        this.setOpening(e.row);
        break;
      case "characters":
        this.openOrCloseCharacters();
        break;
      default:
        break;
    }
  }

  openOrCloseCharacters() {
    this.showCharacters = !this.showCharacters;
  }

  setOpening({title, episode_id, opening_crawl}) {
    this.openingConfig = {title, episode: episode_id, opening_crawl, stars: 200, show: true};
    this.openingTimeOut = setTimeout(() => {
      if(this.openingConfig.show){
        this.closeOpening();
      }
    }, 48000);
  }

  closeOpening() {
    this.openingConfig = {title:'', episode: '', opening_crawl:'', stars: 0, show: false};
    clearTimeout(this.openingTimeOut);
  }

  setMovies = (movies: Movie) => {
    this.movies = movies;
  }

}
