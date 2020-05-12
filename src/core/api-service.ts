import axios, {AxiosResponse} from 'axios';
import {MovieI, PaginatedDataI} from './interface';


export const getMoviesByFiltersPaginated = (limit, offset, selectedOption, sortOrder, selectedGenre, query): Promise<AxiosResponse<PaginatedDataI<MovieI>>> => {
    return axios.get(`https://reactjs-cdp.herokuapp.com/movies?limit=${limit}&offset=${offset}&sortBy=${selectedOption}&sortOrder=${sortOrder}&filter=${selectedGenre}&search=${query}&searchBy=title`);
};
