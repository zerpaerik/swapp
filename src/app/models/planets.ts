import { Model } from './model';

export class Planets extends Model{
    results: Array<{
        name: string,
        diameter  : string,
        rotation_period  : string,
        orbital_period  : string,
        gravity  : string,
        population  : string,
        climate : string,
        terrain  : string,
        surface_water  : string,
        residents  : string,
        films  : string,
        created  : string,
        edited  : string
    }>

   
}