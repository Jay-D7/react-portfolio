import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import LogoS from '../../../assets/images/logo_jd_small.png';
import classes from './Logo.module.scss';

const Logo = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const outlineLogoRef = useRef<SVGPathElement | null>(null);
  const solidLogoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className={classes.logoContainer}>
      <img
        className={classes.solidLogo}
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </div>
  );
};

export default Logo;
