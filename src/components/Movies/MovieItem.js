import { useState } from 'react';
import Poster from './Poster';
import MovieDetails from './MovieDetails';
import classes from './MovieItem.module.scss';
function MovieItem(props) {
  const [isHovered, setIsHovered] = useState(false);

  const findYear = (releaseDate) => {
    const timeStamp = new Date(releaseDate * 1000);
    return timeStamp.getFullYear();
  };
  return (
    <div
      className={classes.item}
      key={props.details.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Poster poster={props.details.poster} title={props.details.title}>
        {isHovered && (
          <MovieDetails
            title={props.details.title}
            genres={props.details.genres}
            overView={props.details.overview}
            year={findYear(props.details.release_date)}
          ></MovieDetails>
        )}
      </Poster>
    </div>
  );
}
export default MovieItem;
