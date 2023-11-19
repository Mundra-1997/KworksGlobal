import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Values from './components/Values';
import WhyUs from './components/WhyUs';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
    <Services />
      <Values/>
      <WhyUs/>
      <AboutUs/>
    </div>
  );
}

export default App;
