import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { Planet } from '../models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: Planet;
  cols = Planet.cols;
  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.getPlanets()
      .subscribe(this.setPlanets);
  }


  setPlanets = (planets: Planet) => {
    this.planets = planets;
  }

}
