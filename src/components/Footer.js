import React from 'react'
import { FaFacebook } from "react-icons/fa";
import {  AiOutlineMail } from "react-icons/ai";
import { TiSocialYoutube } from "react-icons/ti";
import logo from "../images/logo.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer2">

                <img src={logo} className="fot-logo" alt="logo" />
                {/* <div className="mid-footer">social-icons</div> */}
                <div className="social-footer">
                    <ul>
                        <li><FaFacebook /><span>Trusty_Hotels</span></li>
                        <li><AiOutlineMail /><span>info@Trusty_Hotels.com</span></li>
                        <li><TiSocialYoutube /><span>Trusty_Hotels</span></li>
                    </ul>
                </div>

            </div>
        </footer>

    )
}

export default Footer
