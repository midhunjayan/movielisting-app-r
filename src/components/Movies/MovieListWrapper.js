import classes from './MovieListWrapper.module.scss';
import SlideButton from '../Slider/SlideButton';

function MovieLisWrapper(props) {
  console.log(props);
  const handlePrev = () => {
    console.log('previous clicked');
  };

  const handleNext = () => {
    console.log('next clicked');
  };
  return (
    <div className={classes.wrapper}>
      <span className={classes.rowHeaderTitle}>{props.title}</span>
      <div className={classes?.container}>
        {props.movieList.map((mv) => {
          return <div className={classes.item} key={mv.id}>
            <img src={mv.poster} alt={mv.title}/>
          </div>;
        })}

        <SlideButton onClick={handlePrev} type="prev" />
        <SlideButton onClick={handleNext} type="next" />
      </div>
    </div>
  );
}
export default MovieLisWrapper;
