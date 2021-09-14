import { FETCH_MOVIES, API_FAILED, API_SUCCESS } from './movieTypes';

const masterData = {
  loading: false,
  movieMasterData: [],
  error: ''
};

export const movieReducer = (state = masterData, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case API_FAILED:
      return {
        loading: false,
        movieMasterData: [],
        error: action.payload
      };
    case API_SUCCESS:
      return {
        loading: false,
        movieMasterData: action.payload,
        error: ''
      };
    default:
      return state;
  }
};
