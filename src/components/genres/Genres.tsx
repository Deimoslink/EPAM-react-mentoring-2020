import * as React from 'react';


interface GenresPropsI {
    setGenre: (val: string) => void;
    selectedGenre: string;
}

export class Genres extends React.Component<GenresPropsI, {}> {
    genres: Array<string> = ['', 'comedy', 'horror', 'crime', 'action', 'drama', 'thriller'];

    render() {
        return (
            <ul className="genres-list">
                {this.genres.map((item, index) => {
                    return <li key={index}
                                className={(this.props.selectedGenre === item ? 'current' : '')}
                                onClick={() => this.props.setGenre(item)}>
                        {item ? item : 'all'}
                    </li>
                })}
            </ul>
        );
    }
}
