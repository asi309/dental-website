import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import doctor1 from '../../../assets/doctor1.jpg';
import doctor2 from '../../../assets/doctor2.jpg';
import doctor3 from '../../../assets/doctor3.jpg';
import doctor4 from '../../../assets/doctor4.jpg';
import './Doctors.css';

const doctorData = [
  {
    name: 'Akash Kumar',
    role: 'dentist',
    imageUrl: doctor1,
  },
  {
    name: 'Sonam Doe',
    role: 'dentist',
    imageUrl: doctor2,
  },
  {
    name: 'Jemmy Doe',
    role: 'dentist',
    imageUrl: doctor3,
  },
  {
    name: 'Semenio Doe',
    role: 'dentist',
    imageUrl: doctor4,
  },
];

const DoctorCard = ({ doctor: { imageUrl, name, role } }) => (
  <div className="doctor_card">
    <div className="doctor_card__image">
      <img src={imageUrl} alt="doctor" />
    </div>
    <div className="doctor_card__details">
      <p className="doctor_card__details-name">{name}</p>
      <p className="doctor_card__details-role">{role}</p>
      <div className="doctor_card__details-social">
        <FaFacebookF fontSize={16} />
        <BsTwitter fontSize={16} />
        <BsInstagram fontSize={16} />
      </div>
    </div>
  </div>
);

const Doctors = () => {
  return (
    <div className="app__doctors">
      <div className="app__doctors-header">
        Our Distinguished Dental Specialists
      </div>
      <div className="app__doctors-content">{doctorData.map((doctor, idx) => (<DoctorCard key={`doctor${idx}`} doctor={doctor} />))}</div>
    </div>
  );
};

export default Doctors;
