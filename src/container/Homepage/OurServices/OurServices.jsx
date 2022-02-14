import { BsArrowRight } from 'react-icons/bs';

import './OurServices.css';

const servicesData = [
  {
    title: 'Teeth Whitening',
    content:
      'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
  },
  {
    title: 'Teeth Cleaning',
    content:
      'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
  },
  {
    title: 'Modern Anesthetic',
    content:
      'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
  },
  {
    title: 'Quality Brackets',
    content:
      'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
  },
  {
    title: 'Teeth Whitening',
    content:
      'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
  },
  {
    title: 'Teeth Cleaning',
    content:
      'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
  },
];

const OurServices = () => {
  return (
    <div className="app__services">
      <div className="app__services-header">
        <h1 className="app__services-title">Our Umbrella of Services</h1>
        <h2 className="app__services-subtitle">
          Pain free procedures in dentistry
        </h2>
      </div>
      <div className="app__services-contents">
        <div className="app__services-cards_container">
          {servicesData.map((service, idx) => (
            <article key={'service' + idx}>
              <h3 className="app__services-card_title">{service.title}</h3>
              <p className="app__services-card_content">{service.content}</p>
              <button
                type="button"
                onClick={() => {
                  console.log(`Service ${idx + 1} button pressed`);
                }}
                className="app__services-card_cta"
              >
                <span>Explore</span>
                <BsArrowRight fontSize={16} />
              </button>
            </article>
          ))}
        </div>
        <div className="app__services_cta">
          <button
            type="button"
            onClick={() => {
              console.log('Explore All');
            }}
          >
            <span>Explore all</span>
            <BsArrowRight fontSize={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
