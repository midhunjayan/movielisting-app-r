import classes from './MovieItem.module.scss';

function MovieItem(props) {
  return (
    <>
      <div className={classes.item} key={props.details.id}>
        <img src={props.details.poster} alt={props.details.title} />
      </div>
    </>
  );
}
export default MovieItem;
