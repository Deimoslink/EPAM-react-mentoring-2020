import {dropdownStateStateI} from './reducers/dropdown-state-reducer';
import {moviesStateI} from './reducers/movies-reducer';

export interface MovieI {
    budget: number;
    genres: Array<string>;
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
}

export interface PaginatedDataI<T> {
    data: Array<T>;
    total: number;
    offset: number;
    limit: number;
}

export interface ActionI {
    type: string;
    payload: any;
}

export interface ApplicationStateI {
    dropdownState: dropdownStateStateI,
    movies: moviesStateI
}
