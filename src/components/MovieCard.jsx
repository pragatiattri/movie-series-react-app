import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    const { movie, showFavIcon } = this.props;
    const poster =
      movie && movie.Poster && movie.Poster.match(/^http/)
        ? movie.Poster
        : "https://picsum.photos/200/320";
    return (
      <div className="col-md-3 mb-5 movie-card">
        <Link to={"/movie/" + movie.imdbID}>
          <div className="card card-body text-center h-100 animate-on-hover">
            <img className="w-100 mb-2" src={poster} alt="Movie Cover" />
            {showFavIcon ? (
              <i
                className="fas fa-heart col-red"
                style={{
                  fontSize: 36,
                  right: 20,
                  top: 20,
                  position: "absolute",
                }}
              ></i>
            ) : null}
            <h4 className="card-title mt-2">
              {movie.Title} - {movie.Year}
            </h4>
            {/* {<div className="btn btn-primary det-btn">Movie Details</div>} */}
          </div>
        </Link>
      </div>
    );
  }
}

export default MovieCard;
