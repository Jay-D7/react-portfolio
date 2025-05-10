import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';
import classes from './About.module.scss';
import styles from '../AnimatedLetters/AnimatedLetters.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';

export const About = () => {
  const str = `About Me`;
  const strArray = [...str];

  const [letterClass, setLetterClass] = useState(styles.textAnimate);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass(styles.textAnimateHover);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`${classes.container} ${classes.aboutPage}`}>
      <div className={classes.textZone}>
        <h1>
          <AnimatedLetters
            letterClass={letterClass} // Provide a valid CSS class name
            strArray={strArray}
            idx={15}
          />
        </h1>

        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fanatic, photography
          enthusiast, and tech-obsessed!!!
        </p>
      </div>

      <div className={classes.stageCubeCont}>
        <div className={classes.mainContainer}>
          <div className={classes.subContainer}>
            <div className={classes.sky}>
              <div className={classes.stars}></div>
              <div className={classes.stars2}></div>
              <div className={classes.stars3}></div>
              <div className={classes.comet}></div>
            </div>
          </div>

          <div className={classes.cubeSpinner}>
            <div className={classes.face1}>
              <FontAwesomeIcon icon={faSass} />
            </div>
            <div className={classes.face2}>
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className={classes.face3}>
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className={classes.face4}>
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className={classes.face5}>
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className={classes.face6}>
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
