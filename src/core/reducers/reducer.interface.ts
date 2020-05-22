import {MovieI} from '../interface';

export interface moviesStateI {
    movies: Array<MovieI>;
    selectedOption: string;
    selectedGenre: string;
    query: string;
    sortOrder: string;
    offset: number;
    limit: number;
    total: number | null;
}

export interface dropdownStateStateI {
    showDropdown: boolean;
}
