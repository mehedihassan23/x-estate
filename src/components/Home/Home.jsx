import React from 'react'

import "./Home.css"
import NavBar from '../Header/NavBar'

const Home = () => {
  return (
     <section className='home'>
        <NavBar />
        <div className="content">
          <b className='bold'>Now</b>
          <strong className='strong'>Made your building</strong>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, asperiores! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
          <a href="" className='btn'>Contact Us</a>
         </div> 
     </section>
     
  )
}

export default Home
