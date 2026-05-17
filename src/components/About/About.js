import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import aniket3 from '../../assets/aniket3.jpeg'


const About = () => {
  return (
    <div id='About' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt=" " />
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={aniket3} alt='Aniket Sharma'/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am a Web Developer from Chandigarh, India with 6 Months Experience. . I am a Web Developer from Chandigarh, India with 6 Months Experience.</p>
                    <p>I am a Web Developer from Chandigarh,  I am a Web Developer from Chandigarh, India with 6 Months Experience.</p>
                </div>
                <div className='about-skills'>
                        <div className='about-skill'>  <p>HTML & CSS</p> <hr style={{width:"50%" }}/> </div>
                        <div className='about-skill'>  <p>React Js</p> <hr style={{width:"70%" }}/>  </div>
                        <div className='about-skill'>  <p>WordPress</p> <hr style={{width:"60%" }}/>  </div>
                        <div className='about-skill'>  <p>JavaScript</p> <hr style={{width:"50%" }}/>  </div>
                     
                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>6+</h1>
                <p>MONTHS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>3+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
