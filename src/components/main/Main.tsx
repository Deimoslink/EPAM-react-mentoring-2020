import * as React from 'react';
import Filter from '../../containers/filter/Filter';
import {Movie} from '../movie/Movie';
import {Pagination} from '../pagination/Pagination';
import {MovieI} from '../../core/interface';
import './Main.scss';


interface MainPropsI {
    movies: Array<MovieI>;
    total: number;
    offset: number;
    limit: number;
    setSize: (val: number) => void;
    setPage: (val: number) => void;
}

export class Main extends React.Component<MainPropsI, {}> {
    render() {
        return this.props.movies.length ?
            <div className="main">
                <div className="total"><b>{this.props.total}</b> {this.props.total === 1 ? 'movie' : 'movies'} found</div>
                <Filter/>
                <div className="movies-list">
                    {Array.from(this.props.movies).map((item) => {
                        return <Movie key={item.id} {...item}/>
                    })}
                </div>
                <Pagination
                    total={this.props.total}
                    offset={this.props.offset}
                    limit={this.props.limit}
                    setSize={(limit) => this.props.setSize(limit)}
                    setPage={(offset) => this.props.setPage(offset)}
                />
            </div>
        :
            <div className="main">
                <div className="no-results">
                    <p>No results found</p>
                </div>
            </div>
    }
}
