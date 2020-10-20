import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";

const Aboutelem = (props) => {
    return (
        <article className="room">
        <div className="img-container">
          <img src={props.img} alt={props.name} className="about-img" />

          <a href={props.github} className="btn-primary-about room-link-1 about-icon-position-1" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
          <a href={props.email} className="btn-primary-about room-link-1 about-icon-position-2" target="_blank" rel="noopener noreferrer">
            <MdMail/>
          </a> 
          <a href={props.linkedin} className="btn-primary-about room-link-1 about-icon-position-3" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
          <a href={props.facebook} className="btn-primary-about room-link-1 about-icon-position-4" target="_blank" rel="noopener noreferrer">
            <SiFacebook/>
          </a>              
        </div>

        <p className="room-info">{props.name}</p>
        <p className="room-info">{props.major}</p>
      </article>
    )
}

export default Aboutelem
