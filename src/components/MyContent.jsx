import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import { fetchMyContent } from "../actions/actionCreators";
// import Loader from "./Loader";

class MyContent extends Component {
  componentDidMount() {
    // console.log("fetching content");
    this.props.fetchMyContent();
  }

  render() {
    const { movies } = this.props;
    const moviesArr = Object.keys(movies);
    let content = "";
    content =
      moviesArr && moviesArr.length
        ? moviesArr.map((movie, index) => (
            <MovieCard key={index} movie={movies[movie]} showFavIcon={true} />
          ))
        : null;
    return <div className="row mt-5">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.contentReducer.contentList,
});

export default connect(mapStateToProps, {
  fetchMyContent,
})(MyContent);
