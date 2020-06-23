import React, { Component } from "react";
import { connect } from "react-redux";
import { saveContent, unsaveContent } from "../actions/actionCreators";

class Favorite extends Component {
  saveUnsaveFavorites(fav) {
    if (fav) this.props.unsaveContent(this.props.movie.imdbID);
    else this.props.saveContent(this.props.movie);
  }

  render() {
    const { movie, contentList } = this.props;
    let classesHeart, fav;
    if (
      contentList &&
      movie &&
      movie.imdbID &&
      contentList[movie.imdbID] &&
      contentList[movie.imdbID].favorite
    ) {
      classesHeart = "fas fa-heart col-red cursor-pointer";
      fav = true;
    } else {
      classesHeart = "fas fa-heart gray-heart cursor-pointer";
      fav = false;
    }

    return (
      <div className="col-xs-12 mb-3 mt-3">
        <i
          className={classesHeart}
          style={{ fontSize: "36px" }}
          onClick={() => this.saveUnsaveFavorites(fav)}
        />
        {
          <h6 className="card-title text-center col-red cursor-pointer">
            <u>{fav ? <span>Saved</span> : <span>Save</span>} to my content</u>
          </h6>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.searchReducer.movie,
  contentList: state.contentReducer.contentList,
});

export default connect(mapStateToProps, {
  saveContent,
  unsaveContent,
})(Favorite);
