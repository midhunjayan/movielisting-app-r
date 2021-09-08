import { useRef, useState, useEffect } from 'react';

import SlideButton from '../Slider/SlideButton';
import classes from './MovieListWrapper.module.scss';
import MovieItem from './MovieItem';

function MovieLisWrapper(props) {
  // movie list container reference
  const listRef = useRef();
  // how many slides present
  const [slideNumber, setSlideNumber] = useState(0);
  // to show/hide next and previous button
  const [hasNext, setHasNext] = useState(true);
  const [hasPrevious, setHasPrevious] = useState(false);
  // container related details
  const [itemProp, setItemProp] = useState({});

  useEffect(() => {
    const containerWidth = listRef.current.getBoundingClientRect().width - 50;
    const itemsPerPage = Math.floor(listRef.current.getBoundingClientRect().width / 130);
    const totalSlides = Math.floor(props?.movieList?.length / itemsPerPage);
    if (props.movieList?.length < itemsPerPage) {
      setHasNext(false);
    }
    setItemProp({ totalSlides, itemsPerPage, containerWidth });
  }, []);

  useEffect(() => {
    if (slideNumber === 0) {
      setHasPrevious(false);
    }
  }, [slideNumber]);
  // prev/next arrow click handler
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x;
    if (direction === 'prev' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${itemProp.containerWidth + distance}px)`;
    }
    if (direction === 'next' && slideNumber < itemProp.totalSlides) {
      setSlideNumber(slideNumber + 1);
      setHasPrevious(true);
      listRef.current.style.transform = `translateX(${-itemProp.containerWidth + distance}px)`;
    }
  };
  return (
    <div className={classes.wrapper}>
      <span className={classes.rowHeaderTitle}>{props.title}</span>

      {hasPrevious && <SlideButton onClick={() => handleClick('prev')} type="prev" />}

      <div className={classes?.container} ref={listRef}>
        {props.movieList.map((mv) => {
          return <MovieItem details={mv} key={mv.id}></MovieItem>;
        })}
      </div>

      {hasNext && <SlideButton onClick={() => handleClick('next')} type="next" />}
    </div>
  );
}
export default MovieLisWrapper;
