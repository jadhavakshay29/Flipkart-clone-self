// import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import {reducer} from './redux/reducers/index';
// import thunk from "redux-thunk";

// const store = createStore(reducer, {},
//      applyMiddleware(thunk),
//      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;

import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer} from "./redux/reducers/index";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
