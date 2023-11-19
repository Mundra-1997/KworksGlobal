import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/about-us' element={  <AboutUs/>}/>
          <Route path='/' element={  <Home/>}/>
        </Routes>
    
      </Router>
   
    
    </div>
  );
}

export default App;
