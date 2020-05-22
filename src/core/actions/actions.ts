import {getMoviesByFiltersPaginated} from '../api-service';
import {Dispatch} from 'redux';
import {ActionI, ApplicationStateI} from '../interface';


export const setMoviesAction = () => {
  return (dispatch: Dispatch<ActionI>, getState: () => ApplicationStateI) => {
      const {limit, offset, selectedOption, sortOrder, selectedGenre, query} = getState().movies;

      getMoviesByFiltersPaginated(limit, offset, selectedOption, sortOrder, selectedGenre, query)
          .then(res => {
              dispatch({
                  type: "GET_MOVIES",
                  payload: res.data.data
              });
              dispatch({
                  type: "GET_TOTAL",
                  payload: res.data.total
              });
          });
  };
};

export const setOptionAction = (selectedOption: string) =>  {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: "OPTIONS",
            payload: selectedOption
        });
        dispatch(setMoviesAction());
    };
};

export const setGenreAction = (selectedGenre: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch ({
            type: "GENRE",
            payload: selectedGenre
        });
        dispatch(setMoviesAction());
    };
};

export const setQueryAction = (query: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch ({
            type: "QUERY",
            payload: query
        });
        dispatch(setMoviesAction());
    };
};

export const setSortAction = (sortOrder: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch ({
            type: "SORT_ORDER",
            payload: sortOrder
        });
        dispatch(setMoviesAction());
    }
};

export const setSizeAction = (limit: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch ({
            type: "SET_SIZE",
            payload: limit
        });
        dispatch(setMoviesAction());
    }
};

export const setPageAction = (offset: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch ({
            type: "SET_PAGE",
            payload: offset
        });
        dispatch(setMoviesAction());
    }
};

export const toggleDropdownAction = (showDropdown: boolean) => {
    return (dispatch: Dispatch<any>) => {
        dispatch ({
            type: "SHOW_DROPDOWN",
            payload: showDropdown
        })
    }
};
