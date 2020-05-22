import * as React from 'react';
import Filter from '../../containers/filter/Filter';
import {Movie} from '../movie/Movie';
import {Pagination} from '../pagination/Pagination';
import './Main.scss';
import {ErrorBoundary} from '../../core/ErrorBoundary';
import {MainPropsI} from './Main.interface';


export class Main extends React.Component<MainPropsI, {}> {
    render() {
        return this.props.movies.length ?
            <ErrorBoundary>
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
            </ErrorBoundary>
        :
            <ErrorBoundary>
                <div className="main">
                    <div className="no-results">
                        <p>No results found</p>
                    </div>
                </div>
            </ErrorBoundary>

    }
}
