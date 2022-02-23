import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

import logo from '../../assets/logo_footer.png';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {};

  return (
    <div className="app__footer">
      <div className="app__footer-about">
        <div className="app__footer-about_logo">
          <img src={logo} alt="logo" />
        </div>
        <h3 className="app__footer-about_header">About Us</h3>
        <p className="app__footer-about_body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="app__footer-business">
        <p className="app__footer-business_hours">
          Business hours:
          <br />
          <span>Monday to Saturday 9:30 am - 4:30 pm</span>
        </p>
        <p className="app__footer-business_address">
          Address:
          <br />
          <span>A-67 south Ex Delhi-110002</span>
        </p>
        <p className="app__footer-business_email">
          Email:
          <br />
          <span>abc@logoipsum.com</span>
        </p>
        <p className="app__footer-business_phone">
          Phone:
          <br />
          <span>1800 - 458495-4455</span>
        </p>
      </div>
      <div className="app__footer-social">
        <h3 className="app__footer-social_title">Stay Connected</h3>
        <ul className="app__footer-social_list">
          <li className="app__footer-social_list-item">
            <div>
              <FaFacebookF />
            </div>
            Facebook
          </li>
          <li className="app__footer-social_list-item">
            <div>
              <FaTwitter />
            </div>
            Twitter
          </li>
          <li className="app__footer-social_list-item">
            <div>
              <FaGoogle />
            </div>
            Google
          </li>
          <li className="app__footer-social_list-item">
            <div>
              <FaInstagram />
            </div>
            Instagram
          </li>
          <li className="app__footer-social_list-item">
            <div>
              <AiOutlineYoutube />
            </div>
            YouTube
          </li>
        </ul>
      </div>
      <div className="app__footer-newsletter">
        <h3 className="app__footer-newsletter_title">Newsletter</h3>
        <p className="app__footer-newsletter_body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="app__footer-newsletter_form">
          <input
            type="text"
            placeholder="Enter Email ID"
            id="newsletter"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" onClick={handleSubmit}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
