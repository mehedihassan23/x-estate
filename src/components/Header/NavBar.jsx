import React from 'react'
import { FaHome } from "react-icons/fa";

import './NavBar.css'

const NavBar = () => {
  return (
    
       <nav className='navBar'>
       
       <div className="logo">
       <FaHome className='logoIcon' />
        <span className='Xlogo'>X-Estate</span>
       </div>

       <div className="link">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Project</a>
          <a href="">Contact</a>
          <a href="" className='lastLink'>Footer</a>   
       </div>

     </nav>
   
  )
}

export default NavBar
