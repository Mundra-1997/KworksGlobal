import React from 'react';
import {useState} from 'react';
import Paper from '@mui/material/Paper';
import 'animate.css';
import ReactCardFlip from "react-card-flip";
import Question from './Question';
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
  const [flip, setFlip] = useState(false);
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);
  const [flip5, setFlip5] = useState(false);
  const [flip6, setFlip6] = useState(false);
  const [flip7, setFlip7] = useState(false);
 const navigate = useNavigate()
  return (
    <div className='service-container'>
      <p className='service-title'>Level up your finance game. Unplug from fixed costs, plug into on-demand financial services.<br/> <span >Future of finance reimagined to be <span style={{fontSize:'1.25rem',fontWeight:'500'}}>Finance As A Service.</span>  Pay for customized, timely solutions that you need.</span></p>
       <div className='logo-des'>
        <div style={{width:'50%'}}>
          <img src={f9} alt="f9"></img>
        </div>
        <div>
      <p className='logo-des-p'>Partner with our on-demand finance department. From bookkeeping to strategic planning, M&A, fund & investment accounting and more, our certified team manages it all. </p>
    
      </div>
      </div>
      <p className='logo-des-a'>Free yourself to prioritize business growth.</p>
      <Question/>
   
      <div className='boxesss' >
      <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
      <Paper elevation={5} className='service-paper'  onClick={() => setFlip(!flip)}>
        <div><img className='service-img' src={f1} alt='pics'></img></div>
        <p className='service-heading'>Book Keeping & Accounting<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='back-side' onClick={() => setFlip(!flip)}>
       <p>
       Stay Organized with accurate and up-to-date financial records. Expertise to perform month end close efficiently and accurately.
       </p>
      </Paper>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip1}
            flipDirection="vertical">
      <Paper elevation={5} className='service-paper' onClick={() => setFlip1(!flip1)}>
        <div><img className='service-img'src={f2} alt='pics'></img></div>
        <p className='service-heading'>CFO Consulting Services<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='back-side' onClick={() => setFlip1(!flip1)}>
       <p>
       Level up your finances with a part-time CFO. Gain expert guidance during key growth stages without full-time costs. Focus on your startup's core while we unlock financial clarity and build investor confidence. CFO services is your bridge to the big leagues to attract investors, build confidence, and scale smarter.
       </p>
      </Paper>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip2}  flipDirection="vertical">
      <Paper elevation={5} className='service-paper' onClick={()=>setFlip2(!flip2)}>
        <div><img className='service-img' src={f3} alt='pics'></img></div>
        <p className='service-heading'>Financial Analysis<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='back-side' onClick={() => setFlip2(!flip2)}>
       <p>
       Gain insights into your financial health and make data driven decisions. We're your financial compass, guiding you with expert analysis and actionable insights. 
       </p>
      </Paper>


      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip3}  flipDirection="vertical">
      <Paper elevation={5} className='service-paper' onClick={()=>setFlip3(!flip3)}>
        <div><img className='service-img' src={f4} alt='pics'></img></div>
        <p className='service-heading'>Tax & Compliance<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='back-side' onClick={() => setFlip3(!flip3)}>
       <p>
       All compliance and tax deadlines and deliverables are On time. No more tracking or worrying as we have you covered. Our tax and compliance experts navigate the ever-changing landscape, ensuring you stay squeaky clean with the authorities. 
       </p>
      </Paper>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip4}  flipDirection="vertical">
      <Paper elevation={5} className='service-paper'onClick={() => setFlip4(!flip4)}>
        <div><img className='service-img' src={f5} alt='pics'></img></div>
        <p className='service-heading'>Strategic Financial Partner<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='back-side' onClick={() => setFlip4(!flip4)}>
       <p>
       Close deals faster and maximize value with our expert accounting and strategic advisory services. Mergers and acquisitions are complex journeys, filled with intricate calculations, hidden risks, and critical decisions. 
       </p>
      </Paper>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip5}  flipDirection="vertical">
      <Paper elevation={5} className='service-paper' onClick={() => setFlip5(!flip5)}>
        <div><img className='service-img' src={f6} alt='pics'></img></div>
        <p className='service-heading'>Financial Systems<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='back-side' onClick={() => setFlip5(!flip5)}>
       <p>
       Automate tasks, gain clear-as-crystal insights, and watch your finances blossom. We partner with leading technologies to liberate your agility, cutting out endless demos and guesswork.
       </p>
      </Paper>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip6}  flipDirection="vertical">
      <Paper elevation={5} className='service-paper'onClick={() => setFlip6(!flip6)}>
        <div><img className='service-img' src={f7} alt='pics'></img></div>
        <p className='service-heading'>Payroll<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='back-side' onClick={() => setFlip6(!flip6)}>
       <p>
       At Finteam we handle everything from timesheets to taxes, so you can focus on what matters. Leave payroll complexities behind
       </p>
      </Paper>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip7}  flipDirection="vertical">
      <Paper elevation={5} className='service-paper' onClick={() => setFlip7(!flip7)}>
        <div><img className='service-img' src={f8} alt='pics'></img></div>
        <p className='service-heading'>Investor and Equity Management<span style={{ display: 'block',
    width: '50%',
    marginTop:'0.5rem',
    height: '0.3rem',
    backgroundColor: '#134d65'}}></span></p>
      </Paper>
      <Paper elevation={5} className='back-side' onClick={() => setFlip7(!flip7)}>
       <p>
       Empower your investment journey with confidence. Our comprehensive accounting and equity services equip you with the tools and insights to make informed decisions, maximize returns, and achieve your financial goals. 
       </p>
      </Paper>
      </ReactCardFlip>
      </div>
    </div>
  )
};

export default Services;