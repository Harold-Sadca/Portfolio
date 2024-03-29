import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faDiagramProject,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/images/logo.png';
import './nav.css';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const root = document.documentElement;

  const toggle = () => {
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <div className='nav-bar'>
      {/* <div className='mode-toggle'>
        <NavLink onClick={toggle}>
          <FontAwesomeIcon icon={faMoon} color='#4d4d4e' />
        </NavLink>
      </div> */}
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact='true'
          activeclassname='active'
          to='/'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink
          activeclassname='active'
          className='about-link'
          to='/about'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink
          activeclassname='active'
          className='projects-link'
          to='/projects'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faDiagramProject} color='#4d4d4e' />
        </NavLink>
        <NavLink
          activeclassname='active'
          className='contact-link'
          to='/contact'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color='#ffd700'
          size='3x'
          className='close-icon'
        />
      </nav>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/harold-sadca-6449111b5/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color='#4d4d4e'
              className='anchor-icon'
            />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/Harold-Sadca'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              icon={faGithub}
              color='#4d4d4e'
              className='anchor-icon'
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color='#ffd700'
        size='3x'
        className={`hamburger-icon ${showNav ? 'hide' : ''}`}
      />
    </div>
  );
};

export default Nav;
