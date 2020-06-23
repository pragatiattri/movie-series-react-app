import * as actions from "../actions/actionTypes";

const initialState = {
  contentList: {},
  movie: [],
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_CONTENT:
      return { ...state, contentList: action.payload.myContentList };
    case actions.UNSAVE_CONTENT:
      return { ...state, contentList: action.payload.myContentList };
    case actions.FETCH_MY_CONTENT:
      return { ...state, contentList: action.payload.myContentList };
    default:
      return state;
  }
};

export default contentReducer;
