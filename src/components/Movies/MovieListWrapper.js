import { useRef, useState, useEffect } from 'react';

import SlideButton from '../Slider/SlideButton';
import classes from './MovieListWrapper.module.scss';

function MovieLisWrapper(props) {
  const listRef = useRef();

  const [slideNumber, setSlideNumber] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrevious, setHasPrevious] = useState(false);
  const totalItems = props?.movieList?.length;
  useEffect(() => {
    if (slideNumber === 0) {
      setHasPrevious(false);
    }
  }, [slideNumber]);
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 80;
    const itemsPerPage = Math.ceil(listRef.current.getBoundingClientRect().width / 130);
    const containerWidth = listRef.current.getBoundingClientRect().width - 180;
    const totalSlides = Math.ceil(totalItems / itemsPerPage);
    if (direction === 'prev' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${containerWidth + distance}px)`;
    }
    if (direction === 'next' && slideNumber < totalSlides) {
      setSlideNumber(slideNumber + 1);
      setHasPrevious(true);
      listRef.current.style.transform = `translateX(${-containerWidth + distance}px)`;
    }
  };
  return (
    <div className={classes.wrapper}>
      <span className={classes.rowHeaderTitle}>{props.title}</span>
      {hasPrevious && <SlideButton onClick={() => handleClick('prev')} type="prev" />}
      {hasNext && <SlideButton onClick={() => handleClick('next')} type="next" />}
      <div className={classes?.container} ref={listRef}>
        {props.movieList.map((mv) => {
          return (
            <div className={classes.item} key={mv.id}>
              <img src={mv.poster} alt={mv.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MovieLisWrapper;
