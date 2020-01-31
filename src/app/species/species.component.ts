import { Component, OnInit } from '@angular/core';
import { SpecieService } from '../services/specie.service';
import { Specie } from '../models/specie';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  species: Specie;
  cols = Specie.cols;
  constructor(private specieService: SpecieService) { }

  ngOnInit() {
    this.specieService.getSpecies()
      .subscribe(this.setSpecies);
  }


  setSpecies = (species: Specie) => {
    this.species = species;
  }

}
