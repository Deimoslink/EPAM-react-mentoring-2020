import {MovieI} from '../../core/interface';

export interface MainPropsI {
    movies: Array<MovieI>;
    total: number;
    offset: number;
    limit: number;
    setSize: (val: number) => void;
    setPage: (val: number) => void;
}
