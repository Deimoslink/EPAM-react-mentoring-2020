import * as React from 'react';
import './DetailedMovie.scss';
import {ApplicationStateI, MovieI} from '../../core/interface';
import {connect} from 'react-redux';
import {getMovieById} from '../../core/api-service';


class DetailedMovie extends React.Component<any, MovieI> {

    componentDidMount() {
        getMovieById(this.props.match.params.id).then(res => {
            this.setState(res.data);
        })
    }

    render() {
        return this.state && this.state.id ? <div className="detailed-movie">

            <img src={this.state.poster_path}/>
            <div className="desc">
                <h1>{this.state.title}</h1>
                <p className="date">{this.state.release_date.slice(0, 4)}</p>
                <p className="movie-genres">{this.state.genres.join(', ')}</p>
                <p className="description">{this.state.overview}</p>
            </div>

        </div> : <div className="detailed-movie text-center">Movie with this id not found</div>;
    }
}


const mapStateToProps = (state: ApplicationStateI) => {
    return state;
};

export default connect(mapStateToProps, {})(DetailedMovie);
