import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import { fetchMovies, setLoading } from "../actions/actionCreators";
import Loader from "./Loader";

class MoviesComponent extends Component {
  loadMore = () => {
    this.props.fetchMovies();
    this.props.setLoading();
  };
  render() {
    const { movies, loadMore, loading } = this.props;
    let content = "";
    content =
      movies && movies.length
        ? movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} showFavIcon={false} />
          ))
        : null;
    return (
      <>
        <div className="row mt-5">{content}</div>
        {loadMore && !loading ? (
          <div
            onClick={this.loadMore}
            id="load-more"
            className="cursor-pointer"
          >
            Load More
          </div>
        ) : loading ? (
          <Loader />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.searchReducer.movies,
  pg: state.searchReducer.pg,
  loadMore: state.searchReducer.loadMore,
  loading: state.searchReducer.loading,
});

export default connect(mapStateToProps, { fetchMovies, setLoading })(
  MoviesComponent
);
