import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Contact from './components/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinanceAsService from './components/FinanceAsService';

function App() {
  return (
    <div className='App'>
    
      <div className='content'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/' element={<Home />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services/finance' element={<FinanceAsService/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
