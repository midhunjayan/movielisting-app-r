import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { movieReducer } from './movie/movieReducers';
import { genreReducer } from './genre/genreReducer';
const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
