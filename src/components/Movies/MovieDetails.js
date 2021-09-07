import classes from './MovieDetails.module.scss';

function MovieDetails({ title, genres, year }) {
  return (
    <>
      <span className={classes.title}>{title}</span>
      <span className={classes.desc}>{genres?.join(', ')}</span>
    </>
  );
}
export default MovieDetails;
