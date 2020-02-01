export abstract class Model {
    count: number;
    previous: string;
    next: string;
}

export interface Pagination {
    count: number;
    previous: string;
    next: string;
}