import { useState, useEffect } from 'react';
import MovieLisWrapper from '../components/Movies/MovieListWrapper';
function Home() {
  const [movieMasterData, setMovieMasterData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [genre, setGenre] = useState([]);
  const getMovieData = () => {
    fetch('movie-list.json')
      .then((response) => response.json())
      .then((movieList) => {
        setMovieMasterData(movieList);
        setGenre(['Action', 'Comedy']);
        setLoading(false);
      });
  };
  const findKeyFromData = (key, title, inputArray, startIndex, endIndex) => {
    const copyArray = [...inputArray.slice(startIndex, endIndex)];
    return copyArray.filter((item) => item[key]?.includes(title));
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <>
      {!isLoading &&
        genre.map((g, index) => {
          return (
            <MovieLisWrapper
              title={g}
              movieList={findKeyFromData('genres', g, movieMasterData, 0, 100)}
              key={`${g}${index}`}
            />
          );
        })}
      {isLoading && 'Loading .. . . .'}
    </>
  );
}
export default Home;
