import React from 'react';
import './Movie.css';



class Movie extends React.Component {
    render() {
        return (
            <div className="Movie">
                <div className="image-container">
                    <img src={this.props.movie['medium_cover_image']} alt={this.props.movie.title} />
                </div>
                <h2>{this.props.movie.title}</h2>
                <div className="Movie-information">
                    <div className="Movie-address">
                        {this.props.movie.genres.map(genre => {
                            return <p>{genre}</p>
                        })}
                        <p>{this.props.movie.year}</p>
                        <p>Time: {this.props.movie.runtime}</p>
                    </div>
                    {/* <div className="Movie-reviews">
                        <h3>{this.props.movie['title_long']}</h3>
                        <h3 className="rating">{this.props.movie.rating}</h3>
                        <p>{this.props.movie.summary}</p>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Movie;