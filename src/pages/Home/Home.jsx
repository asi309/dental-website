import { Footer, Navbar } from '../../components';
import {
  Blog,
  Contact,
  Details,
  Doctors,
  Header,
  OurServices,
  Testimonials,
} from '../../container/Homepage';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Contact />
      <Details />
      <OurServices />
      <Doctors />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
