import hero1 from '../../../assets/hero1.png';
import './Header.css';

const Header = () => {
  return (
    <div className="app__header_wrapper">
      <div className="app__header">
        <div className="app__header-content">
          <p className="app__header-title">Welcome to Dental Clinic</p>
          <p className="app__header-main_text">
            Professional,Warm and friendly Dental care for you
          </p>
          <p className="app__header-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </p>
          <button type="button" onClick={() => {}} className="app__header-cta">
            Make Appointment
          </button>
        </div>
        <div className="app__header-image">
          <div className="app__header-circle" />
          <img src={hero1} alt="hero" className='app__header_img' />
        </div>
      </div>
    </div>
  );
};

export default Header;
