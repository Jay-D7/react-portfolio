import { Link, NavLink } from 'react-router-dom';
import './style.scss';
import LogoJD from '../../assets/images/golden_white_logo.png';
import LogoSubtitle from '../../assets/images/logo_sub_jd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faSuitcase,
  faEnvelope,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoJD} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="JD" />
    </Link>
    <nav className="showNav">
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
      </NavLink>
      <NavLink exact="true" activeClassName="active" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
      </NavLink>
      <NavLink exact="true" activeClassName="active" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4d" />
      </NavLink>
      <NavLink exact="true" activeClassName="active" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
      </NavLink>
    </nav>
  </div>
);

export default Sidebar;
