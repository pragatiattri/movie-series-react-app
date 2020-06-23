import * as actions from "./actionTypes";
import { BaseURL, APIkey } from "../config";
const resultsPerPage = 10;

export const searchMovie = (text) => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.SEARCH_MOVIE,
      payload: {
        text,
      },
    });
  };
};

export const fetchMovies = () => {
  return (dispatch, getState) => {
    //async code before dispatching event
    const textInState = getState().searchReducer.text;
    const pageId = getState().searchReducer.pg;

    fetch(`${BaseURL}?apiKey=${APIkey}&s=${textInState}&page=${pageId}`)
      .then((res) => res.json())
      .then((res) => {
        // if (res.Response.match(/True/i)) {
        dispatch({
          type: `${pageId}` > 1 ? actions.LOAD_MORE : actions.FETCH_MOVIES,
          payload: {
            movies: res.Search,
            loadMore:
              `${pageId}` < Math.ceil(res.totalResults / resultsPerPage)
                ? true
                : false,
          },
        });
      })
      .catch((err) => console.log("Err in fetching movies", err));
  };
};

export const fetchMovieInfo = (id) => (dispatch) => {
  fetch(`${BaseURL}?apiKey=${APIkey}&i=${id}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: actions.FETCH_MOVIE_INFO,
        payload: {
          movie: res,
        },
      });
    })
    .catch((err) => console.log("Err in fetching movie info", err));
};

export const setLoading = () => {
  return {
    type: actions.SHOW_LOADER,
  };
};

export const loadMore = (pg) => {
  return {
    type: actions.LOAD_MORE,
    payload: {
      pg,
    },
  };
};

export const saveContent = (data) => {
  data.favorite = true;
  return (dispatch, getState) => {
    let myContentList = localStorage.getItem("my-content-list") || "{}";
    myContentList = JSON.parse(myContentList);
    myContentList[data.imdbID] = data;
    localStorage.setItem("my-content-list", JSON.stringify(myContentList));
    dispatch({
      type: actions.SAVE_CONTENT,
      payload: {
        myContentList,
      },
    });
  };
};

export const unsaveContent = (dataId) => {
  return (dispatch, getState) => {
    // const myContentList = getState().contentReducer.contentList;
    let myContentList = localStorage.getItem("my-content-list");
    myContentList = JSON.parse(myContentList);
    delete myContentList[dataId];
    localStorage.setItem("my-content-list", JSON.stringify(myContentList));
    dispatch({
      type: actions.UNSAVE_CONTENT,
      payload: {
        myContentList,
      },
    });
  };
};

export const fetchMyContent = () => {
  return (dispatch, getState) => {
    // const myContentList = getState().contentReducer.contentList;
    let myContentList = localStorage.getItem("my-content-list");
    myContentList = JSON.parse(myContentList);
    dispatch({
      type: actions.FETCH_MY_CONTENT,
      payload: {
        myContentList,
      },
    });
  };
};
