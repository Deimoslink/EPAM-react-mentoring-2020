import axios, {AxiosResponse} from 'axios';
import {MovieI, PaginatedDataI} from './interface';


export const getMoviesByFiltersPaginated = (
    limit: number,
    offset: number,
    selectedOption: string,
    sortOrder: string,
    selectedGenre: string,
    query: string
): Promise<AxiosResponse<PaginatedDataI<MovieI>>> => {
    return axios.get(`https://reactjs-cdp.herokuapp.com/movies`, {
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
