import { useState } from 'react';
import { BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

import logo from '../../assets/logo.svg';
import './Navbar.css';

const SocialCircle = ({ icon: Icon, fontSize }) => (
  <div className="app__navbar-blue_circle">
    <Icon fontSize={fontSize} />
  </div>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar" style={toggleMenu ? { boxShadow: '0px 1px 0px #fff' } : {}}>
      <div className="app__navbar-small">
        <GiHamburgerMenu
          color="#0096ff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          style={toggleMenu && { display: 'none' }}
        />
        {toggleMenu && (
          <div>
            <div
              className="app__navbar-small_overlay"
              onClick={() => setToggleMenu(false)}
            />
            <div className="app__navbar-small_body">
              <div className="app__navbar-small_header">
                <div className="app__navbar-small_logo">
                  <img src={logo} alt="logo" />
                </div>
                <MdOutlineClose
                  fontSize={27}
                  className="overlay__close"
                  onClick={() => setToggleMenu(false)}
                />
              </div>
              <ul className="app__navbar-small_links">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#doctor">Doctor</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <div className="app__navbar-small_social">
                <h2>Contact Us</h2>
                <div className="app__navbar-small_social-links">
                  <SocialCircle icon={BsInstagram} fontSize={28} />
                  <SocialCircle icon={FaFacebookF} fontSize={28} />
                  <SocialCircle icon={BsTwitter} fontSize={28} />
                  <SocialCircle icon={BsYoutube} fontSize={28} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#doctor">Doctor</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div
        className={`app__navbar-logo ${
          toggleMenu && `app__navbar-small_logo_hidden`
        }`}
      >
        <img src={logo} alt="logo" />
      </div>
      <div className="app__navbar-social">
        <SocialCircle icon={BsInstagram} fontSize={16} />
        <SocialCircle icon={FaFacebookF} fontSize={16} />
        <SocialCircle icon={BsTwitter} fontSize={16} />
        <SocialCircle icon={BsYoutube} fontSize={16} />
      </div>
    </nav>
  );
};

export default Navbar;
