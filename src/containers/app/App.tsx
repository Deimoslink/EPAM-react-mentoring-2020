import {connect} from 'react-redux';
import * as React from 'react';
import {
    setOptionAction,
    setGenreAction,
    setQueryAction,
    setSortAction,
    setSizeAction,
    setPageAction
} from '../../core/actions/actions';
import {Main} from '../../components/main/Main';
import {Header} from '../../components/header/Header';
import './App.scss'
import {ApplicationStateI, MovieI} from '../../core/interface';

interface AppPropsI {
    setOption: (val: string) => void;
    movies: Array<MovieI>;
    total: number;
    offset: number;
    limit: number;
    setSize: (val: number) => void;
    setPage: (val: number) => void;
    setQuery: (val: string) => void;
}

class App extends React.Component<AppPropsI, {}> {
    componentDidMount() {
        this.props.setOption('release_date');
    };

    render() {
        return (
            <div className="App">
                <Header setQuery={(query) => this.props.setQuery(query)}/>
                <Main
                    movies={this.props.movies}
                    total={this.props.total}
                    offset={this.props.offset}
                    limit={this.props.limit}

                    setSize={(limit) => this.props.setSize(limit)}
                    setPage={(offset) => this.props.setPage(offset)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationStateI) => {
    return {
        selectedGenre: state.moviesReducer.selectedGenre,
        selectedOption: state.moviesReducer.selectedOption,
        movies: state.moviesReducer.movies,
        sortOrder: state.moviesReducer.sortOrder,
        total: state.moviesReducer.total,
        offset: state.moviesReducer.offset,
        limit: state.moviesReducer.limit,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setGenre: (selectedGenre: string) => {
            dispatch(setGenreAction(selectedGenre));
        },
        setOption: (selectedOption: string) => {
            dispatch(setOptionAction(selectedOption));
        },
        setQuery: (query: string) => {
            dispatch(setQueryAction(query));
        },
        setSort: (sortOrder: string) => {
            dispatch(setSortAction(sortOrder));
        },
        setSize: (limit: number) => {
            dispatch(setSizeAction(limit));
        },
        setPage: (offset: number) => {
            dispatch(setPageAction(offset));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
