import { SET_GENRE_LIST } from './genreTypes';

export const setGenreList = (genreList) => {
  return {
    type: SET_GENRE_LIST,
    payload: genreList,
  };
};
