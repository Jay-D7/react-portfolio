import { Link, NavLink } from 'react-router-dom';
import '../../App.scss';
import './style.scss';
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
    return `${isActive ? 'isActive ' : ''}${baseClass}`;
  };

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoJD} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="JD" />
      </Link>
      <nav className="showNav">
        <NavLink
          className={(props) => getNavLinkClass(props.isActive, '/')}
          end
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        </NavLink>
        <NavLink
          className={(props) => getNavLinkClass(props.isActive, 'about-link')}
          end
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>
        <NavLink
          className={(props) =>
            getNavLinkClass(props.isActive, 'portfolio-link')
          }
          end
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4d" />
        </NavLink>
        <NavLink
          className={(props) => getNavLinkClass(props.isActive, 'contact-link')}
          end
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
