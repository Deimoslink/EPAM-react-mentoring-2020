import * as React from 'react';
import './Movie.scss';
import {MoviePropsI} from './Movie.interface';
import {Link} from 'react-router-dom';


export const Movie = (props: MoviePropsI) => (
    <article className="movie">
        <Link to={"/movie/" + props.id}>
            <img src={props.poster_path}/>
            <div className="info">
                <h3 className="title">{props.title}</h3>
                <p className="date">{props.release_date.slice(0, 4)}</p>
                <p className="movie-genres">{props.genres.slice(0, 3).join(', ')}</p>
            </div>
        </Link>
    </article>
);
