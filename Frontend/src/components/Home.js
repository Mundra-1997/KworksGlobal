import React from 'react'
import Services from './Services';
import WhyUs from './WhyUs';
import ProblemSolution from './ProblemSolution';
import Banner from './Banner';
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <div> 
      <Banner/>
          <Services />
    </div>
  )
}

export default Home
