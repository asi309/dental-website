import { useEffect, useRef, useState } from 'react';
import { IoEllipseOutline, IoEllipse } from 'react-icons/io';

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
}) => (
  <div className="testimonial_card">
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
  </div>
);

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 410;
    } else {
      current.scrollLeft += 410;
    }
  };

  // useEffect(() => {
  //   setTimeout();
  
  //   return () => {
  //     second;
  //   };
  // }, [third]);
  

  return (
    <div className="app__testimonials">
      <div className="app__testimonials-header">
        <div className="app__testimonials-title">Our Clients Speak</div>
        <div className="app__testimonials-subtitle">
          We have been working with clients around the world
        </div>
      </div>
      <div className="app__testimonials-content">
        <div className="app__testimonials-content_scroll" ref={scrollRef}>
          {testimonialData.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial + idx}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
