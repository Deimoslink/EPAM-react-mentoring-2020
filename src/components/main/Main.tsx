import * as React from 'react';
import Filter from '../../containers/filter/Filter';
import {Movie} from '../movie/Movie';
import {Pagination} from '../pagination/Pagination';
import {MovieI} from '../../core/interface';


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
        if (this.props.movies.length > 0) {
            return (
                <div className="main">
                    <div className="total"><b>{this.props.total}</b> {this.props.total === 1 ? 'movie' : 'movies'} found</div>
                    <Filter/>
                    <div className="movies-list">
                        {Array.from(this.props.movies).map((item) => {
                            return <Movie key={item.id}
                                          title={item.title}
                                          release_date={item.release_date}
                                          genres={item.genres}
                                          poster_path={item.poster_path}/>
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
            )
        } else {
            return (
                <div className="main">
                    <div className="no-results">
                        <p>No results found</p>
                    </div>
                </div>
            )
        }
    }
}
