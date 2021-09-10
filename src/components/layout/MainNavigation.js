import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Counter from '../Counter';
import classes from './MainNavigation.module.scss';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.leftSection}>
        <img src={Logo} alt="logo" className={classes.logo}/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-movie-list">Lists</Link>
            </li>
          </ul>
        </nav>
        <Counter deadLineDate={'2021/09/16'}></Counter>
      </div>
      <div className={classes.rightSection}>
        <span className={classes.avatar}>John Doe</span>
      </div>
    </header>
  );
}

export default MainNavigation;
