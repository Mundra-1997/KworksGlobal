import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './components/Pricing';
// ayush
function App() {
  return (
    <div className='App'>
      <div className='background-image'></div> {/* Background image container */}
      <div className='content'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/' element={<Home />} />
            <Route path='/pricing' element={<Pricing />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
