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
import {
  faGithub,
  faLinkedin,
  faSlack,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export const Sidebar = () => {
  const getNavLinkClass = (isActive: boolean, baseClass: string) => {
    return `${isActive ? classes.isActive + ' ' : ''}${
      classes[baseClass] || baseClass
    }`;
  };

  // NavLinks
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

  //SocialLinks
  const socialLinks = [
    {
      href: 'https://www.linkedin.com',
      icon: faLinkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/Jay-D7',
      icon: faGithub,
      label: 'GitHub',
    },
    {
      href: 'https://www.youtube.com',
      icon: faYoutube,
      label: 'YouTube',
    },
    {
      href: 'https://mr-robot-network.slack.com',
      icon: faSlack,
      label: 'Slack',
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

      {/* Nav */}
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

      {/* SocialLinks */}
      <ul className={classes.socialLinks}>
        {socialLinks.map(({ href, icon, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
            >
              <FontAwesomeIcon
                icon={icon}
                className={classes.anchorIcon}
              ></FontAwesomeIcon>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default Sidebar;
