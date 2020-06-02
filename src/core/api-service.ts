import axios, {AxiosResponse} from 'axios';
import {MovieI, PaginatedDataI} from './interface';

const API_URL = 'https://reactjs-cdp.herokuapp.com/movies';


export const getMoviesByFiltersPaginated = (
    limit: number,
    offset: number,
    selectedOption: string,
    sortOrder: string,
    selectedGenre: string,
    query: string
): Promise<AxiosResponse<PaginatedDataI<MovieI>>> => {
    return axios.get(API_URL, {
        params: {
            limit,
            offset,
            sortOrder,
            sortBy: selectedOption,
            filter: selectedGenre,
            search: query,
            searchBy: 'title'
        }
    });
};

export const getMovieById = (id: number): Promise<AxiosResponse<MovieI>> => {
    return axios.get(API_URL + '/' + id);
};
