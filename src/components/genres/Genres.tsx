import * as React from 'react';
import './Genres.scss';
import {GenresPropsI} from './Genres.interface';


export class Genres extends React.Component<GenresPropsI, {}> {
    genres: Array<string> = ['', 'comedy', 'horror', 'crime', 'action', 'drama', 'thriller'];

    render() {
        return (
            <ul className="genres-list">
                {this.genres.map((item, index) => {
                    return <li key={index}
                               className={(this.props.selectedGenre === item ? 'current' : '')}
                               onClick={() => this.props.setGenre(item)}>
                        {item || 'all'}
                    </li>
                })}
            </ul>
        );
    }
}
