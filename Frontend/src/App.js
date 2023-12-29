import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
            
          </Routes>
        
        </Router>
      </div>
    </div>
  );
}

export default App;
