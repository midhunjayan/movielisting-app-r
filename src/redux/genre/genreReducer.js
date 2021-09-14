import { SET_GENRE_LIST } from './genreTypes';

const masterData = {
  genreList: [],
};

export const genreReducer = (state = masterData, action) => {
  switch (action.type) {
    case SET_GENRE_LIST:
      return {
        genreList: action.payload,
      };

    default:
      return state;
  }
};
