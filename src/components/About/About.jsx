import React from 'react'
import "./About.css"

const About = () => {
    return (
        <section className='about-section' id='about'>
            <h1 className="about-heading">Explore Us</h1>

            <div className="container">
                <div className="about">
                    <div className="about-image">
                        <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1711424727/about_a3u4th.jpg" alt="" />
                    </div>
                    <div className="about-content">
                        <h2>Construction and Civil Engineering</h2>
                        <p>
                              Civil engineering is a professional engineering discipline that deals with the design, construction,   and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, pipelines, structural components of buildings, and railways.
                        </p>
                        <a href="" className="read-more">Read More</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
