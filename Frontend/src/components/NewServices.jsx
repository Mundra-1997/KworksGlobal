import React from "react";
import { useState } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import ReactCardFlip from "react-card-flip";
import Question from "./Question";
import "./Service.css";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutImg from "../image/cool.png";
import advisory from "../image/financial.png";
import tax from "../image/Cfo.png";
import f1 from "../../src/image/bookeeping.svg";
import f2 from "../../src/image/cfo.svg";
import f3 from "../../src/image/fa.svg";
import f4 from "../../src/image/tax.svg";
import f5 from "../../src/image/fs.svg";
import f6 from "../../src/image/invest.svg";
import f7 from "../../src/image/payroll.svg";
import f8 from "../../src/image/strategic.svg";
import f9 from "../../src/image/whiteLogo11.svg";
import { Helmet } from "react-helmet";

const NewServices = () => {
  const [flip, setFlip] = useState(false);
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);
  const [flip5, setFlip5] = useState(false);
  const [flip6, setFlip6] = useState(false);
  const [flip7, setFlip7] = useState(false);
  
  return (
    <>
      <div className="boxesss">
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
          <div className="service-paper" onClick={() => setFlip(!flip)}>
            <div>
              <img className="service-img" src={f1} alt="pics"></img>
            </div>
            <p className="service-heading">
              Book Keeping & Accounting
              <span
                style={{
                  display: "block",
                  width: "50%",
                  marginTop: "0.5rem",
                  height: "0.3rem",
                  backgroundColor: "#134d65",
                }}
              ></span>
            </p>
          </div>
          <div className="back-side" onClick={() => setFlip(!flip)}>
            <p>
              Chaos got you in a chokehold?
              <br /> Breathe easy with organized finances! We tame tangled
              records & conquer month-end close with flawless accuracy. Stay
              informed, stay ahead.
            </p>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip1} flipDirection="vertical">
          <div className="service-paper" onClick={() => setFlip1(!flip1)}>
            <div>
              <img className="service-img" src={f2} alt="pics"></img>
            </div>
            <p className="service-heading">
              CFO Consulting Services
              <span
                style={{
                  display: "block",
                  width: "50%",
                  marginTop: "0.5rem",
                  height: "0.3rem",
                  backgroundColor: "#134d65",
                }}
              ></span>
            </p>
          </div>
          <div className="back-side" onClick={() => setFlip1(!flip1)}>
            <p>
              Skip full-time CFO costs, unlock expert growth guidance. Level up
              your finances with our part-time CFOs. Get clarity, build investor
              confidence, and scale smarter. Bridge to the big leagues starts
              here.
            </p>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip2} flipDirection="vertical">
          <div className="service-paper" onClick={() => setFlip2(!flip2)}>
            <div>
              <img className="service-img" src={f3} alt="pics"></img>
            </div>
            <p className="service-heading">
              Financial Analysis
              <span
                style={{
                  display: "block",
                  width: "50%",
                  marginTop: "0.5rem",
                  height: "0.3rem",
                  backgroundColor: "#134d65",
                }}
              ></span>
            </p>
          </div>
          <div className="back-side" onClick={() => setFlip2(!flip2)}>
            <p>
              Lost in financial fog?
              <br /> Stop guessing, start knowing. We analyze your numbers,
              reveal insights, and guide you to goals. Expert analysis,
              actionable steps - your financial compass to navigate with
              confidence.
            </p>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip3} flipDirection="vertical">
          <div className="service-paper" onClick={() => setFlip3(!flip3)}>
            <div>
              <img className="service-img" src={f4} alt="pics"></img>
            </div>
            <p className="service-heading">
              Tax & Compliance
              <span
                style={{
                  display: "block",
                  width: "50%",
                  marginTop: "0.5rem",
                  height: "0.3rem",
                  backgroundColor: "#134d65",
                }}
              ></span>
            </p>
          </div>
          <div className="back-side" onClick={() => setFlip3(!flip3)}>
            <p>
              Tax season stress-free? <br />
              We got this. Deadlines met, deductions maxed, sleep tight. Our
              experts navigate the chaos, keeping you squeaky clean with the
              IRS. Relax, your finances are in good hands.
            </p>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip4} flipDirection="vertical">
          <div className="service-paper" onClick={() => setFlip4(!flip4)}>
            <div>
              <img className="service-img" src={f5} alt="pics"></img>
            </div>
            <p className="service-heading">
              Strategic Financial Partner
              <span
                style={{
                  display: "block",
                  width: "50%",
                  marginTop: "0.5rem",
                  height: "0.3rem",
                  backgroundColor: "#134d65",
                }}
              ></span>
            </p>
          </div>
          <div className="back-side" onClick={() => setFlip4(!flip4)}>
            <p>
              M&A maze got you lost?
              <br /> Uncover hidden value & close deals faster with our
              accounting navigators. Expert due diligence, financial
              forecasting, tax optimization—chart your course to merger &
              acquisition success.
            </p>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip5} flipDirection="vertical">
          <div className="service-paper" onClick={() => setFlip5(!flip5)}>
            <div>
              <img className="service-img" src={f6} alt="pics"></img>
            </div>
            <p className="service-heading">
              Financial Systems
              <span
                style={{
                  display: "block",
                  width: "50%",
                  marginTop: "0.5rem",
                  height: "0.3rem",
                  backgroundColor: "#134d65",
                }}
              ></span>
            </p>
          </div>
          <div className="back-side" onClick={() => setFlip5(!flip5)}>
            <p>
              Dust off spreadsheets, unleash growth. AI scans your finances,
              finds hidden inefficiencies. Automate tasks, gain crystal
              insights, watch profits bloom. We partner with top tech, cutting
              endless demos. Tailor your system, dominate your industry. Lead
              the finance revolution supporting Future of Finance
            </p>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip6} flipDirection="vertical">
          <div className="service-paper" onClick={() => setFlip6(!flip6)}>
            <div>
              <img className="service-img" src={f7} alt="pics"></img>
            </div>
            <p className="service-heading">
              Payroll
              <span
                style={{
                  display: "block",
                  width: "50%",
                  marginTop: "0.5rem",
                  height: "0.3rem",
                  backgroundColor: "#134d65",
                }}
              ></span>
            </p>
          </div>
          <div className="back-side" onClick={() => setFlip6(!flip6)}>
            <p>
              Ditch the timesheet headaches and tax woes! Our smooth payroll
              system handles everything - from new hires to paychecks. Work
              smarter, not harder on paydays. Relax, hand off payroll to the
              pros, and watch your business fly.
            </p>
          </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flip7} flipDirection="vertical">
          <div className="service-paper" onClick={() => setFlip7(!flip7)}>
            <div>
              <img className="service-img" src={f8} alt="pics"></img>
            </div>
            <p className="service-heading">
              Investor and Equity Management
              <span
                style={{
                  display: "block",
                  width: "50%",
                  marginTop: "0.5rem",
                  height: "0.3rem",
                  backgroundColor: "#134d65",
                }}
              ></span>
            </p>
          </div>
          <div className="back-side" onClick={() => setFlip7(!flip7)}>
            <p>
              Invest boldly, not blindly. Our accounting & equity experts
              empower you with clarity, insights, and guidance to unlock maximum
              returns and conquer your financial goals. From bookkeeping
              brilliance to expert market navigation, we're your trusted
              co-pilot on the journey to investment mastery.
            </p>
          </div>
        </ReactCardFlip>
      </div>
    </>
  );
};

export default NewServices;
