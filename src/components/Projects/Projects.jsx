import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
     <section className='projects'>
        <h1 className="projects-heading">See Our Projects</h1>
         <div className="project-gallery">      
              <div>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1711434866/project1_yjd6qr.png" alt="project" />
              </div>
              <div>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1711434874/project2_hpgjaf.jpg" alt="project" />
              </div>
              <div>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1711435018/project3_y0ddsl.jpg" alt="project" />
              </div>  
              <div>
                 <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1711435018/project4_s1jujy.jpg" alt="project" />
              </div>     
         </div>
     </section>
  )
}

export default Projects
