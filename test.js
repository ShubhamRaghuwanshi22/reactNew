import React from 'react';
import { createStore, applyMiddleware, combineReducers,compose  } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducer/reducer';
import loginReducer from '../Reducer/loginReducer';
import rampReducer from '../Reducer/rampReducer';
// import ladderReducer from '../Reducer/ladderReducer';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const rootReducer = combineReducers({reducer,loginReducer, rampReducer});
const store = createStore(rootReducer,  composeEnhancers(  applyMiddleware(thunk)));
export default store;
