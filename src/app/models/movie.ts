import { Model } from './model';

export class Movie extends Model{
    results: Array<{
        title: string,
        episode_id: string,
        opening_crawl: string,
        director: string,
        producer: string,
        release_date: Date,
        species: Array<any>,
        starships: Array<any>,
        vehicles: Array<any>,
        character: Array<any>,
        planets: Array<any>,
        created: Date,
        edited: Date,
        url: string
    }>

    static cols = [
        {title: 'Title', key: 'title'},
        {title: 'Episode', key: 'episode_id'},
        {title: 'Director', key: 'director'},
        {title: 'Release date', key: 'release_date'}
    ];
}