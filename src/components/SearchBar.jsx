import React, { Component } from "react";
import { connect } from "react-redux";
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../actions/actionCreators";

class SearchBar extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies();
    this.props.setLoading();
  };
  render() {
    return (
      <div className="mt-5 text-center">
        <div className="container">
          <h4 className="">Search for movies or TV series</h4>
          <form
            id="searchForm"
            className="display-flx"
            onSubmit={this.onSubmit}
          >
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Enter Movie/Series Name ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.searchReducer.text,
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(SearchBar);
