import { Link } from 'react-router-dom';
import logoTitle from '../../assets/images/logo_jd_small.png';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={`${classes.container} ${classes.homePage}`}>
      <div className={classes['text-zone']}>
        <h1>
          Hi,
          <br /> I'm
          <img src={logoTitle} alt="developer" />
          acob
          <br />
          Web Developer
        </h1>
        <h2>Frontend Developer/ HTML/SCSS/JAVASCRIPT/REACT</h2>
        <Link to="/contact" className={classes['flat-button']}>
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
