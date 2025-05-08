import { Link, NavLink } from 'react-router-dom';
import '../../App.scss';
import classes from './Sidebar.module.scss';
import LogoJD from '../../assets/images/golden_white_logo.png';
import LogoSubtitle from '../../assets/images/logo_sub_jd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faSuitcase,
  faEnvelope,
  // faBars,
  // faClose,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const getNavLinkClass = (isActive: boolean, baseClass: string) => {
    return `${isActive ? classes.isActive + ' ' : ''}${
      classes[baseClass] || baseClass
    }`;
  };

  // const navLinks = [
  //   { to: '/', icon: faHome, label:'', className:''}
  //   { to: '/about', icon: faHome, label:'', className:''}
  //   { to: '/portfolio', icon: faHome, label:'', className:''}
  //   { to: '/contact', icon: faHome, label:'', className:''}
  // ]

  return (
    <div className={classes.NavBar}>
      <Link className={classes.logo} to="/">
        <img src={LogoJD} alt="Company Logo" />
        <img
          className={classes.SubLogo}
          src={LogoSubtitle}
          alt="Company Signature JD"
        />
      </Link>
      <nav className={classes.showNav}>
        <NavLink
          className={(props) => getNavLinkClass(props.isActive, '/')}
          end
          to="/"
        >
          <FontAwesomeIcon icon={faHome} aria-label="Home" />
        </NavLink>
        <NavLink
          className={(props) => getNavLinkClass(props.isActive, 'about-link')}
          end
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} aria-label="About" />
        </NavLink>
        <NavLink
          className={(props) =>
            getNavLinkClass(props.isActive, 'portfolio-link')
          }
          end
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} aria-label="Portfolio" />
        </NavLink>
        <NavLink
          className={(props) => getNavLinkClass(props.isActive, 'contact-link')}
          end
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} aria-label="Contact" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
