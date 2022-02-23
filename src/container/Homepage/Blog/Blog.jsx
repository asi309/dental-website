import { IoMdChatboxes } from 'react-icons/io';
import { BsHeart } from 'react-icons/bs';

import blog1 from '../../../assets/blog1.jpg';
import blog2 from '../../../assets/blog2.jpg';
import blog3 from '../../../assets/blog3.jpg';
import './Blog.css';

const blogData = [
  {
    img: blog1,
    author: 'Jane Doe',
    date: '20 Feb 2022',
    comments: 280,
    likes: 89,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: 'Your bedroom is where you begin and end every day, and when it’s styled just how you like it, it can set the perfect tone. Whether you’re making a few easy updates or starting fresh ...',
  },
  {
    img: blog2,
    author: 'John Doe',
    date: '20 Jan 2022',
    comments: 580,
    likes: 96,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: 'Your bedroom is where you begin and end every day, and when it’s styled just how you like it, it can set the perfect tone. Whether you’re making a few easy updates or starting fresh ...',
  },
  {
    img: blog3,
    author: 'Akash Doe',
    date: '14 Feb 2022',
    comments: 289,
    likes: 59,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: 'Your bedroom is where you begin and end every day, and when it’s styled just how you like it, it can set the perfect tone. Whether you’re making a few easy updates or starting fresh ...',
  },
];

const BlogCard = ({
  blog: { img, author, date, comments, likes, title, body },
}) => {
  return (
    <div className="app__blog-card">
      <div className="app__blog-card_image">
        <img src={img} alt="blog" />
      </div>
      <div className="app__blog-card_social">
        <div className="app__blog-card_author">
          <p>By {author}</p>
        </div>
        <div className="app__blog-card_date">
          <p>{date}</p>
        </div>
        <div className="app__blog-card_comments">
          <IoMdChatboxes fontSize={16} />
          <p>{comments}</p>
        </div>
        <div className="app__blog-card_likes">
          <BsHeart fontSize={14} />
          <p>{likes}</p>
        </div>
      </div>
      <div className="app__blog-card_content">
        <h2 className="app__blog-card_title">{title}</h2>
        <p className="app__blog-card_body">{body}</p>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="app__blog">
      <div className="app__blog-header">
        <div className="app__blog-title">Our Blog</div>
        <div className="app__blog-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </div>
      </div>
      <div className="app__blog-content">
        {blogData.map((blog, idx) => (
          <BlogCard blog={blog} key={'blog-' + idx} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
