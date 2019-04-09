import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  
    return createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware())
    );
  }
