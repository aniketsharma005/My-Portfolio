import React from 'react'
import './Hero.css';
import Sharma2 from '../../assets/Sharma2.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='Home' className='hero'>
        <img  style={{width:"401px", height:"602", borderRadius:"50px"}} src={Sharma2} alt=""/>
        <h1><span>I am Aniket Sharma,</span> Web Developer Based In INDIA.</h1>
        <p>I am a Web Developer from Chandigarh, India with 6 Months Experience. </p>
        <div className='hero-action'>
            <div className='hero-connect'> <AnchorLink className="anchor-link"  href='#Contact'>Connect me </AnchorLink> </div>
            <div className='hero-resume'> <a href='Resume.pdf' style={{color:'white', textDecoration:'none'}}>My resume </a></div>
        </div>
    </div>
  )
}

export default Hero