import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ScrollToTop from './ScrollToTop';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Fostac from './components/Fostac';

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <div style={{ height: "70px" }}></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
        {/* <Route path='/fostac' element={<Fostac />} /> */} 
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
