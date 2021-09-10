import { useState, useEffect } from 'react';
import classes from './Counter.module.scss';

function CounterDisplay({ label, value }) {
  return (
    <div className={classes.counterDisplay}>
      <span className={classes.key}>{label}</span>
      <span className={classes.value}>{value}</span>
    </div>
  );
}

function Counter({ deadLineDate }) {
  const [countDown, setCountDown] = useState({});
  const formattedDate = new Date(deadLineDate).getTime();

  useEffect(() => {
    const runCountDown = setInterval(() => {
      const now = new Date().getTime();

      const distance = formattedDate - now;
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountDown({ days, hours, minutes, seconds });
    }, 1000);
    return () => {
      clearInterval(runCountDown);
      setCountDown('EXPIRED');
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <CounterDisplay label="'Days'" value={countDown.days}></CounterDisplay>
      <CounterDisplay label="'Hours'" value={countDown.hours}></CounterDisplay>
      <CounterDisplay label="'Minutes'" value={countDown.minutes}></CounterDisplay>
      <CounterDisplay label="'Seconds'" value={countDown.seconds}></CounterDisplay>
    </div>
  );
}

export default Counter;
