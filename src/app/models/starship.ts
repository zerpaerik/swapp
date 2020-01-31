import { Model } from './model';

export class Starship extends Model{
    results: Array<{
        name: string,
        model   : string,
        starship_class   : string,
        manufacturer   : string,
        cost_in_credits   : string,
        length   : string,
        crew  : string,
        passengers   : string,
        max_atmosphering_speed   : string,
        hyperdrive_rating   : string,
        MGLT   : string,
        cargo_capacity    : string,
        consumables    : string,
        films    : string,
        pilots    : string,
        url   : string,
        created  : string,
        edited  : string
    }>

        static cols = [
        {title: 'Name', key: 'name'},
        {title: 'Model', key: 'model'},
        {title: 'Starship Class', key: 'starship_class'},
        {title: 'Manufacturer', key: 'manufacturer'},
        {title: 'Cost in Credist', key: 'cost_in_credits'}
    ];

   
}