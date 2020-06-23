import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import contentReducer from "./contentReducer";

const rootReducer = combineReducers({
  searchReducer,
  contentReducer,
});

export default rootReducer;
