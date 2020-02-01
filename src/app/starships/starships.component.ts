import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../services/starship.service';
import { Starship } from '../models/starship';
import { Pagination } from '../models/model';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: Starship;
  cols = Starship.cols;
  pagination: Pagination;

  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
   this.setStarships("https://swapi.co/api/starships/");
  }

  reFetchOnPagination(url:string) {
    this.setStarships(url);
  }

  setStarships = (url:string) => {
    this.starshipService.getStarships(url)
    .subscribe((starships: Starship) => {
      this.starships = starships;
      const {count, next, previous} = starships;
      this.pagination = {count, next, previous};
    });
    
}

}
