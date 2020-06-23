import * as actions from "../actions/actionTypes";

const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
  pg: 1,
  loadMore: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_MOVIE:
      return { ...state, text: action.payload.text, loading: false, pg: 1 };
    case actions.FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
        loading: false,
        pg: ++state.pg,
        loadMore: action.payload.loadMore,
      };
    case actions.LOAD_MORE:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.movies],
        pg: ++state.pg,
        loading: false,
        loadMore: action.payload.loadMore,
      };
    case actions.FETCH_MOVIE_INFO:
      return {
        ...state,
        movie: action.payload.movie,
        loading: false,
      };
    case actions.SHOW_LOADER:
      return { ...state, loading: true };
    case actions.HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default searchReducer;
