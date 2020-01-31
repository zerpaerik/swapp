import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../services/starship.service';
import { Starship } from '../models/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: Starship;
  cols = Starship.cols;
  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
    this.starshipService.getStarships()
      .subscribe(this.setStarships);
  }


  setStarships = (starships: Starship) => {
    this.starships = starships;
}

}
