import {MainPropsI} from '../src/components/main/Main.interface';

export const mainPropsMock: MainPropsI = {
    movies: [],
    total: null,
    offset: 0,
    limit: 6,
    setPage: () => {},
    setSize: () => {}
};
