import React, { Component } from "react";

import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import MoviesComponent from "./MoviesComponent";

export class LandingComponent extends Component {
  render() {
    const { loading, movies } = this.props;
    return (
      <div className="landing-blk">
        <SearchBar />
        {loading && (!movies || (movies && !movies.length)) ? (
          <Loader />
        ) : (
          <MoviesComponent />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.searchReducer.loading,
  movies: state.searchReducer.movies,
});

export default connect(mapStateToProps)(LandingComponent);
