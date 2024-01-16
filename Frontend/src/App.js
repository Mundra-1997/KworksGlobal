import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NewServices from './components/NewServices';

// import ContactModal from './components/ContactModal';
function App() {
  return (
    <div className='App'>
    
      <div className='content'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/' element={<Home />} />
             <Route path='/contact-us' element={<ContactUs/>}/>
             <Route path='/services' element={<NewServices/>}/>
          </Routes>
        <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
