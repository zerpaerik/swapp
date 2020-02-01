import { Component, OnInit } from '@angular/core';
import { SpecieService } from '../services/specie.service';
import { Specie } from '../models/specie';
import { Pagination } from '../models/model';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  species: Specie;
  cols = Specie.cols;
  pagination: Pagination;
  constructor(private specieService: SpecieService) { }

  ngOnInit() {
    this.setSpecies("https://swapi.co/api/species/");
  }

  reFetchOnPagination(url:string) {
    this.setSpecies(url);
  }


  setSpecies(url:string) {
    this.specieService.getSpecies(url)
    .subscribe((species: Specie) => {
      this.species = species;
      const {count, next, previous} = species;
      this.pagination = {count, next, previous};
    });
  }

}
