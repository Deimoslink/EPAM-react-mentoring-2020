import * as React from 'react';
import './Movie.scss';
import {MoviePropsI} from './Movie.interface';


export const Movie = (props: MoviePropsI) => (
    <article className="movie">
        <img src={props.poster_path}/>
        <div className="info">
            <h3 className="title">{props.title}</h3>
            <p className="date">{props.release_date.slice(0, 4)}</p>
            <p className="movie-genres">{props.genres.slice(0, 3).join(', ')}</p>
        </div>
    </article>
);
