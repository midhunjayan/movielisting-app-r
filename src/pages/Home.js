import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMovies, getMovieData } from '../redux/movie/movieActions';
import MovieLisWrapper from '../components/Movies/MovieListWrapper';

function Home() {
  // redux implementation
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.movie.loading);
  const movieMasterData = useSelector((state) => state.movie.movieMasterData);
  const genre = useSelector((state) => state.genre.genreList);

  const findKeyFromData = (key, title, inputArray, startIndex, endIndex) => {
    const copyArray = [...inputArray.slice(startIndex, endIndex)];
    return copyArray.filter((item) => item[key]?.includes(title));
  };
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(getMovieData());
  }, []);
  return (
    <>
      {!loading &&
        genre.map((g, index) => {
          return (
            <MovieLisWrapper
              title={g}
              movieList={findKeyFromData('genres', g, movieMasterData, 0, 250)}
              key={`${g}${index}`}
            />
          );
        })}
      {loading && 'Loading .. . . .'}
    </>
  );
}

export default Home;
