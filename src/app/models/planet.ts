import { Model } from './model';

export class Planet extends Model{
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

      static cols = [
        {title: 'Name', key: 'name'},
        {title: 'Diameter', key: 'diameter'},
        {title: 'Rotation Period', key: 'rotation_period'},
        {title: 'Orbital Period', key: 'orbital_period'},
        {title: 'Gravity', key: 'gravity'}
    ];


   
}