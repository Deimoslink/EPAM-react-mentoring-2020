import {MovieI} from '../../core/interface';

export interface AppPropsI {
    setOption: (val: string) => void;
    movies: Array<MovieI>;
    total: number;
    offset: number;
    limit: number;
    setSize: (val: number) => void;
    setPage: (val: number) => void;
    setQuery: (val: string) => void;
}
