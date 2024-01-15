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
import AboutImg from '../image/cool.png';
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
       Chaos got you in a chokehold?<br/> Breathe easy with organized finances! We tame tangled records & conquer month-end close with flawless accuracy. Stay informed, stay ahead.
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
       Skip full-time CFO costs, unlock expert growth guidance. Level up your finances with our part-time CFOs. Get clarity, build investor confidence, and scale smarter. Bridge to the big leagues starts here.
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
       Lost in financial fog?<br/> Stop guessing, start knowing. We analyze your numbers, reveal insights, and guide you to goals. Expert analysis, actionable steps - your financial compass to navigate with confidence.
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
       Tax season stress-free? <br/>We got this. Deadlines met, deductions maxed, sleep tight. Our experts navigate the chaos, keeping you squeaky clean with the IRS. Relax, your finances are in good hands.
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
       M&A maze got you lost?<br/> Uncover hidden value & close deals faster with our accounting navigators. Expert due diligence, financial forecasting, tax optimization—chart your course to merger & acquisition success.
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
       Dust off spreadsheets, unleash growth. AI scans your finances, finds hidden inefficiencies. Automate tasks, gain crystal insights, watch profits bloom. We partner with top tech, cutting endless demos. Tailor your system, dominate your industry. Lead the finance revolution supporting Future of Finance
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
       Ditch the timesheet headaches and tax woes! Our smooth payroll system handles everything - from new hires to paychecks. Work smarter, not harder on paydays. Relax, hand off payroll to the pros, and watch your business fly.
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
       Invest boldly, not blindly.  Our accounting & equity experts empower you with clarity, insights, and guidance to unlock maximum returns and conquer your financial goals. From bookkeeping brilliance to expert market navigation, we're your trusted co-pilot on the journey to investment mastery.
       </p>
      </Paper>
      </ReactCardFlip>
      </div>
      <div className='conclusion'>
        <div className='img-div1'>  <img src={AboutImg} alt="About Us"  /></div>
           <div className='conclusion-text'>
            <p>With FinTeam your dedicated accounting and Finance team in-charge, you're libertated.....
          <span>   
  <br/>to channel your energy where it counts most ,nurturing the growth of your business. We're not just a service; we're your strategic ally in unlocking your business's full potential.</span> 
</p>  <div className='conclusion-btn'>Talk to us</div></div> 
   
      </div>
    </div>
  )
};

export default Services;