import { useEffect, useState } from 'react';
import { IoEllipseOutline, IoEllipse } from 'react-icons/io5';

import client from '../../../assets/client.jpg';
import './Testimonials.css';

const testimonialData = [
  {
    title: 'Lorem Ipsum is simply dummy text',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'Jane Cooper',
    role: 'CEO at ABC Corporation',
    imgUrl: client,
  },
  {
    title: 'Lorem Ipsum is simply dummy text',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'Joe Cooper',
    role: 'CEO at ABC Corporation',
    imgUrl: client,
  },
  {
    title: 'Lorem Ipsum is simply dummy text',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'Jeremy Cooper',
    role: 'CEO at ABC Corporation',
    imgUrl: client,
  },
  {
    title: 'Lorem Ipsum is simply dummy text',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'Dane Cooper',
    role: 'CEO at ABC Corporation',
    imgUrl: client,
  },
  {
    title: 'Lorem Ipsum is simply dummy text',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'John Cooper',
    role: 'CEO at ABC Corporation',
    imgUrl: client,
  },
];

const TestimonialCard = ({
  testimonial: { title, text, name, role, imgUrl },
  isActive,
  dots,
  changeIndex,
  isNext,
  isPrev,
  next,
  prev,
}) => {
  return (
    <div
      className={`testimonial_card`}
      style={isActive ? { marginTop: '-40px' } : { opacity: 0.75, cursor: 'pointer' }}
      onClick={isNext ? next : isPrev ? prev : () => {}}
    >
      <div className="testimonial_card-blurb">
        <h2 className="testimonial_card-blurb_title">{title}</h2>
        <p className="testimonial_card-blurb_content">{text}</p>
      </div>
      <div className="testimonial_card-client">
        <div className="testimonial_card-client_image">
          <img src={imgUrl} alt="Testified by" />
        </div>
        <div className="testimonial_card-client_details">
          <h3 className="testimonial_card-client_name">{name}</h3>
          <p className="testimonial_card-client_role">{role}</p>
        </div>
      </div>
      {isActive && (
        <div className="testimonial_card-ellipsis">
          <ul>
            {dots.map((dot, idx) => (
              <li key={idx} onClick={() => changeIndex(idx)}>
                {dot}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const TestimonialSlider = ({ testimonialData }) => {
  const totalItems = testimonialData.length;
  const [index, setIndex] = useState(0);
  const [prevItems, setPrevItems] = useState(totalItems - 1);
  const [nextItems, setNextItems] = useState(1);
  const [sliderItems, setSliderItems] = useState([prevItems, index, nextItems]);

  const dots = [];

  for (let i = 0; i < totalItems; i++) {
    if (i === index) {
      dots[i] = <IoEllipseOutline fontSize={18} />;
    } else {
      dots[i] = <IoEllipse fontSize={14} />;
    }
  }

  const changePrevNext = () => {
    if (index === totalItems - 1) {
      setNextItems(0);
    } else {
      setNextItems(index + 1);
    }
    if (index === 0) {
      setPrevItems(totalItems - 1);
    } else {
      setPrevItems(index - 1);
    }
  };

  const next = () => {
    setIndex((currIdx) => (currIdx + 1) % totalItems);
  };

  const prev = () => {
    setIndex((currIdx) => (currIdx - 1 + totalItems) % totalItems);
  };

  const changeIndex = (idx) => {
    if (idx !== index) {
      setIndex(idx);
    }
  };

  useEffect(() => {
    changePrevNext();
  }, [index]);

  useEffect(() => {
    setSliderItems([prevItems, index, nextItems]);
  }, [prevItems, nextItems]);

  return (
    <div className="app__testimonials-content_scroll">
      {sliderItems.map((testimonialIdx, idx) => (
        <TestimonialCard
          testimonial={testimonialData[testimonialIdx]}
          key={'testimonial-' + idx}
          isActive={index === testimonialIdx}
          dots={dots}
          changeIndex={changeIndex}
          isNext={nextItems === testimonialIdx}
          isPrev={prevItems === testimonialIdx}
          next={next}
          prev={prev}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="app__testimonials">
      <div className="app__testimonials-header">
        <div className="app__testimonials-title">Our Clients Speak</div>
        <div className="app__testimonials-subtitle">
          We have been working with clients around the world
        </div>
      </div>
      <div className="app__testimonials-content">
        <TestimonialSlider testimonialData={testimonialData} />
      </div>
    </div>
  );
};

export default Testimonials;
