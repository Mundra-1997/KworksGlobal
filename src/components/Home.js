import React from 'react'
import Services from './Services';
import Values from './Values';
import WhyUs from './WhyUs';
import ProblemSolution from './ProblemSolution';
import Banner from './Banner';
const Home = () => {
  return (
    <div>
      <Banner/>
          <Services />
      {/* <Values/>
      <WhyUs/> */}
      {/* <ProblemSolution/> */}
    </div>
  )
}

export default Home
