import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import SearchKeyReducer from "./reducers/search-key";

const rootReducer = combineReducers({
  searchKey: SearchKeyReducer,
});

const configureStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default configureStore;
