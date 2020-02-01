import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnChanges {
  @Input('show') show = false;
  @Input('movie') movie;
  @Output('close') close = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeme() {
    this.close.emit(true);
  }

  ngOnChanges(change: SimpleChanges) {
    if(change.show) {
      this.show = change.show.currentValue;
    }
    if(change.movie) {
      this.movie = change.movie.currentValue;
    }
  }
}

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {

  @Input('characterUrl') characterUrl: string = 'https://swapi.co/api/people/1/';
  character: any;
  opened = false;

  constructor(private movieService: MovieService) { }

  showDetails() {
    this.opened = !this.opened;
  }

  ngOnInit() {
    this.movieService.getCharacter(this.characterUrl)
      .subscribe(char => this.character = char);
  }

}
