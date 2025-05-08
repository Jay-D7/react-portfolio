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

  const navLinks = [
    { to: '/', icon: faHome, label: 'Home', className: '/' },
    { to: '/about', icon: faUser, label: 'About', className: 'about-link' },
    {
      to: '/portfolio',
      icon: faSuitcase,
      label: 'Portfolio',
      className: 'portfolio-link',
    },
    {
      to: '/contact',
      icon: faEnvelope,
      label: 'Contact',
      className: 'contact-link',
    },
  ];

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
        {navLinks.map(({ to, icon, label, className }) => (
          <NavLink
            key={to}
            className={({ isActive }) => getNavLinkClass(isActive, className)}
            end
            to={to}
          >
            <FontAwesomeIcon icon={icon} aria-label={label} />
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
