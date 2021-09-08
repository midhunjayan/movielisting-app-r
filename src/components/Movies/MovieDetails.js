import classes from './MovieDetails.module.scss';

function MovieDetails({ title, genres, year, overView }) {
  return (
    <div className={classes.detailsWrapper}>
      <span className={classes.title}>{title}</span>
      <span className={classes.desc}>{genres?.join(', ')}</span>
      <span className={classes.desc}>{year}</span>
      <p className={`${classes.desc} ${classes.overview}`}>{overView}</p>
    </div>
  );
}
export default MovieDetails;
