import React from 'react';
import Paper from '@mui/material/Paper';
import 'animate.css';
import './Service.css'
import {useNavigate} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import advisory from '../image/financial.png'
import tax from '../image/Cfo.png'
import f1 from '../../src/image/bookeeping.svg'
import f2 from '../../src/image/cfo.svg'
import f3 from '../../src/image/fa.svg'
import f4 from '../../src/image/tax.svg'
import f5 from '../../src/image/fs.svg'
import f6 from '../../src/image/invest.svg'
import f7 from '../../src/image/payroll.svg'
import f8 from '../../src/image/strategic.svg'
import f9 from '../../src/image/whiteLogo11.svg'
const data = [
  {
    title: "Finance As Service",
    image: advisory,
    points: [
      "Bookkeeping & Accounting: Stay organized with accurate and up-to-date financial records.",
      "Financial Analysis: Gain insights into your financial health and make data-driven decisions.",
      "Cash Flow Management: Optimize cash flow and working capital.",
      "Tax Planning & Compliance: Ensure tax compliance and minimize your tax burden.",
      "Strategic Financial Advice: Get expert guidance on financial strategy and planning."
    ]
  },
  {
    title: "Fractional CFO Service",
    image: tax,
    points: [
      "Strategic Financial Planning: Crafting a financial roadmap to help you achieve your business goals.",
      "Budgeting and Forecasting: Accurate financial predictions for informed decision-making.",
      "Cash Flow Management: Optimizing cash flow to keep your business financially healthy.",
      "Risk Assessment and Mitigation: Identifying and managing financial risks.",
      "Mergers and Acquisitions: Expert guidance for successful business transactions."
    ]
  },
];

const Services = () => {
   
 const navigate = useNavigate()
  return (
    <div className='service-container'>
      <p className='service-title'>Level up your finance game. Unplug from fixed costs, plug into on-demand financial services.<br/> <span style={{fontSize:'2rem'}}><b> Re-imagined! Finance As A Service</b> Pay only for customized, timely solutions you need.</span></p>
       <div className='logo-des'>
        <div style={{width:'50%'}}>
          <img src={f9} alt="f9"></img>
        </div>
        <div>
      <p className='logo-des-p'>FinTeam: Your on-demand finance department. From bookkeeping to strategic planning, M&A, and more, our certified team manages it all. Free yourself to prioritize business growth</p>
      <p className='logo-des-p'>Tired of a bloated finance department draining your resources? Say goodbye to manual processes, siloed data, and hidden costs.</p>
      </div>
      </div>
      <div className='boxesss' >
      <Paper elevation={5} className='service-paper' onClick={()=>navigate('services/finance')}>
        <div><img className='service-img' src={f1} alt='pics'></img></div>
        <p className='service-heading'>Book Keeping & Accounting<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='service-paper' onClick={()=>navigate('services/cfo')}>
        <div><img className='service-img'src={f2} alt='pics'></img></div>
        <p className='service-heading'>CFO Consulting Services<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='service-paper' onClick={()=>navigate('services/finance')}>
        <div><img className='service-img' src={f3} alt='pics'></img></div>
        <p className='service-heading'>Financial Analysis<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='service-paper' onClick={()=>navigate('services/finance')}>
        <div><img className='service-img' src={f4} alt='pics'></img></div>
        <p className='service-heading'>Tax & Compliance<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='service-paper' onClick={()=>navigate('services/finance')}>
        <div><img className='service-img' src={f5} alt='pics'></img></div>
        <p className='service-heading'>Strategic Financial Partner<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='service-paper' onClick={()=>navigate('services/finance')}>
        <div><img className='service-img' src={f6} alt='pics'></img></div>
        <p className='service-heading'>Financial Systems<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='service-paper' onClick={()=>navigate('services/finance')}>
        <div><img className='service-img' src={f7} alt='pics'></img></div>
        <p className='service-heading'>Payroll<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='service-paper' onClick={()=>navigate('services/finance')}>
        <div><img className='service-img' src={f8} alt='pics'></img></div>
        <p className='service-heading'>Investor and Equity Management<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      </div>
    </div>
  )
};

export default Services;