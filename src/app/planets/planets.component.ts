import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { Planet } from '../models/planet';
import { Pagination } from '../models/model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: Planet;
  cols = Planet.cols;
  pagination: Pagination;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.setPlanets("https://swapi.co/api/planets/");
  }

  reFetchOnPagination(url:string) {
    this.setPlanets(url);
  }

  setPlanets = (url) => {
    this.planetService.getPlanets(url)
      .subscribe((planets: Planet) => {
        this.planets = planets;
        const {count, next, previous} = planets;
        this.pagination = {count, next, previous};
      });
  }

}
