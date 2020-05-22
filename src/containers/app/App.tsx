import {connect} from 'react-redux';
import * as React from 'react';
import {
    setOptionAction,
    setGenreAction,
    setQueryAction,
    setSortAction,
    setSizeAction,
    setPageAction,
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
                <Main {...this.props}

                />
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationStateI) => {
    return {
        selectedGenre: state.movies.selectedGenre,
        selectedOption: state.movies.selectedOption,
        movies: state.movies.movies,
        sortOrder: state.movies.sortOrder,
        total: state.movies.total,
        offset: state.movies.offset,
        limit: state.movies.limit,
    };
};

const mapDispatchToProps = {
    setGenre: setGenreAction,
    setOption: setOptionAction,
    setQuery: setQueryAction,
    setSort: setSortAction,
    setSize: setSizeAction,
    setPage: setPageAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
