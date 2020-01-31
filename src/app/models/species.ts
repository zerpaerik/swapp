import { Model } from './model';

export class Species extends Model{
    results: Array<{
        name: string,
        classification : string,
        designation : string,
        average_height : string,
        average_lifespan : string,
        eye_colors : string,
        species: string,
        hair_colors : string,
        skin_colors : string,
        language : string,
        homeworld : string,
        people : string,
        films: string,
        url : string,
        created  : string,
        edited  : string
    }>

   
}