import './sass/App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Banner from './components/banner';
import Testimonial from './components/testimonials';
import Card from './components/Card';
import Help from './components/pages/Helppage';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path="/help" component={Help} />
      <Hero/>
      <Banner/>
      <Testimonial>
      </Testimonial>
      <Services/>
      <Booking/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
