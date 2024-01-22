import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../constant';
import {IconScroll} from '../../components';
import './Hero.css';


const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title"> Navigating the Web landscape for success </h1>
          <p className="py-4">Our web development agency helps businesses grow and succeed online through a range of services including Mobile & Web Application Development, Cloud Services,Software Testing,IoT,Database Operations and Data Engineering services.</p>
          <button onClick= {()=>navigate("/contact")} className="btn-positivus">Book a consultation</button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
      
      <div className="clients">
      {logos.map((logo, index) => (
      <img
        key={index}
        src={images[logo]}
        alt={images[logo]}
      />
    ))}
  
      </div>
      <IconScroll />
    </div>
    
  )
}

export default Hero