import classes from './Home.module.scss';
import styles from '../AnimatedLetters/AnimatedLetters.module.scss';
import logoTitle from '../../assets/images/logo_jd_small.png';
import { Logo } from './Logo/Logo';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';

export const Home = () => {
  const [letterClass, setLetterClass] = useState(styles.textAnimate);
  const nameArray = ['a', 'c', 'o', 'b'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass(styles.textAnimateHover);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`${classes.container} ${classes.homePage}`}>
      <div className={classes['text-zone']}>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={logoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Front-end Developer/ HTML/SCSS/JAVASCRIPT/REACT</h2>
        <Link to="/contact" className={classes['flat-button']}>
          Contact Me
        </Link>
      </div>
      <div></div>
      <Logo />
    </div>
  );
};

// export default Home;
