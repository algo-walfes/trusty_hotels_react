import React from 'react'
import { Link } from "react-router-dom";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";

const Aboutelem = (props) => {
    return (
        <article className="room">
        <div className="img-container">
          <img src={props.img} alt={props.name} className="about-img" />

          <Link to={props.github} className="btn-primary-about room-link-1 about-icon-position-1">
            <FaGithub/>
          </Link>
          <Link to={props.email} className="btn-primary-about room-link-1 about-icon-position-2">
            <MdMail/>
          </Link> 
          <Link to={props.linkedin} className="btn-primary-about room-link-1 about-icon-position-3">
            <FaLinkedin/>
          </Link>
          <Link to={props.facebook} className="btn-primary-about room-link-1 about-icon-position-4">
            <SiFacebook/>
          </Link>              
        </div>

        <p className="room-info">{props.name}</p>
        <p className="room-info">{props.major}</p>
      </article>
    )
}

export default Aboutelem
