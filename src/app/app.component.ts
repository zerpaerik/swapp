import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'swapp';
  error;
  constructor(private movieService: MovieService) {
    this.movieService.onAnyError()
      .subscribe(error => {
        this.error = error;
        setTimeout(() => {
          this.error = null;
        }, 5000)
    });
  }

}
