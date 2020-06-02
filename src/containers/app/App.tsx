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
import {ApplicationStateI} from '../../core/interface';
import {AppPropsI} from './App.interface';
import {Redirect, Route, Switch} from "react-router";
import {NotFound} from '../../core/not-found/NotFound';
import DetailedMovie from '../detailed-movie/DetailedMovie';


class App extends React.Component<AppPropsI, {}> {

    render() {
        return (
            <Switch>
                <Redirect exact from="/" to="/search" />
                <Route path="/search">
                    <div className="App">
                        <Header setQuery={(query) => this.props.setQuery(query)} query={this.props.query}/>
                        <Main {...this.props}/>
                    </div>
                </Route>
                <Route exact path="/movie/:id" component={DetailedMovie}>
                </Route>
                <Route path='*' component={NotFound}>
                </Route>
            </Switch>
        );
    }
}

const mapStateToProps = (state: ApplicationStateI) => {
    const query = state.router.location.search.slice(1);
    return {
        selectedGenre: state.movies.selectedGenre,
        selectedOption: state.movies.selectedOption,
        movies: state.movies.movies,
        sortOrder: state.movies.sortOrder,
        total: state.movies.total,
        offset: state.movies.offset,
        limit: state.movies.limit,
        query: query
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
