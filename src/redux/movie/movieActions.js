import axios from 'axios';
import { FETCH_MOVIES, API_SUCCESS, API_FAILED } from './movieTypes';
import {  setGenreList } from '../genre/genreActions';
export const fetchMovies = () => {
  return {
    type: FETCH_MOVIES,
  };
};

export const movieListReceived = (payload) => {
  return {
    type: API_SUCCESS,
    payload,
  };
};

export const movieApiError = (payload) => {
  return {
    type: API_FAILED,
    payload,
  };
};

export const getMovieData = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:3001/movies')
      .then((response) => {
        const movieList = response.data;
        dispatch(movieListReceived(movieList));
        const genreArray = ['Action', 'Comedy', 'Thriller', 'Documentary', 'Horror', 'Science Fiction', 'Drama'];
        dispatch(setGenreList(genreArray));
      })
      .catch((err) => {
        dispatch(movieApiError(err));
      });
  };
};
