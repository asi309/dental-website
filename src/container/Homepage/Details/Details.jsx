import './Details.css';
import details1 from '../../../assets/details1.png';
import details2 from '../../../assets/details2.png';
import details3 from '../../../assets/details3.png';
import details4 from '../../../assets/details4.png';
import description from '../../../assets/description.png';

const icons = [details1, details2, details3, details4];

const Card = ({ icon, heading, text }) => (
  <div className="details-card">
    <div className="card__img">
      <img src={icon} alt="card__icon" />
    </div>
    <div>
      <p className="card__heading">{heading}</p>
      <p className="card__text">{text}</p>
    </div>
  </div>
);

const Details = () => {
  return (
    <div className="app__details">
      <div className="app__details-cards_container">
        {icons.map((icon, idx) => (
          <Card
            key={`${icon} + ${idx}`}
            icon={icon}
            heading="Teeth Testing"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        ))}
      </div>
      <div className="app__details-description_container">
        <div className="app__details-description_circle" />
        <div className="app__details-description_img">
          <img src={description} alt="description" />
        </div>
        <div className="app__details-description_content">
          <p className='app__details-description_header'>Relax your dentist knows best</p>
          <div className='app__details-description_text'>
            <div>
              <p className='app__details-description_text_header'>Dental hygiene never forget!</p>
              <p className='app__details-description_text_text'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div>
              <p className='app__details-description_text_header'>Don’t rush when you brush!</p>
              <p className='app__details-description_text_text'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div>
              <p className='app__details-description_text_header'>Visit your dentist once in 6 months</p>
              <p className='app__details-description_text_text'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
