import {getMoviesByFiltersPaginated} from '../api-service';


export const setMoviesAction = () => {
  return (dispatch, getState) => {
      const {limit, offset, selectedOption, sortOrder, selectedGenre, query} = getState().moviesReducer;

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
    return dispatch => {
        dispatch({
            type: "OPTIONS",
            payload: selectedOption
        });
        dispatch(setMoviesAction());
    };
};

export const setGenreAction = (selectedGenre: string) => {
    return dispatch => {
        dispatch ({
            type: "GENRE",
            payload: selectedGenre
        });
        dispatch(setMoviesAction());
    };
};

export const setQueryAction = (query: string) => {
    return dispatch => {
        dispatch ({
            type: "QUERY",
            payload: query
        });
        dispatch(setMoviesAction());
    };
};

export const setSortAction = (sortOrder: string) => {
    return dispatch => {
        dispatch ({
            type: "SORT_ORDER",
            payload: sortOrder
        });
        dispatch(setMoviesAction());
    }
};

export const setSizeAction = (limit: number) => {
    return dispatch => {
        dispatch ({
            type: "SET_SIZE",
            payload: limit
        });
        dispatch(setMoviesAction());
    }
};

export const setPageAction = (offset: number) => {
    return dispatch => {
        dispatch ({
            type: "SET_PAGE",
            payload: offset
        });
        dispatch(setMoviesAction());
    }
};

export const toggleDropdownAction = (showDropdown: boolean) => {
    return dispatch => {
        dispatch ({
            type: "SHOW_DROPDOWN",
            payload: showDropdown
        })
    }
};
