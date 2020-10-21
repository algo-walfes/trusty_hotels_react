import React, { Component } from 'react'
import Aboutelem from "../components/Aboutelem";
import nimrawi from "../images/download.png";
import emad from "../images/emad.jpg";
import Title from "../components/Title";


export default class About extends Component {
    render() {
        return (
            <>
            <div className="about-title">
            <Title title="about us"/>
            </div>
            <div className="featured-rooms-center aboutlist-center">
            <Aboutelem img={nimrawi} name="Mohammad Nimrawi" github="https://github.com/Mohammadnim123" email="mailto:mm.nemrawi96@gmail.com" linkedin="https://www.linkedin.com/in/mohammad-nemrawi-138956197/" facebook="https://web.facebook.com/mohammad.anwer.50/" major="Software Developer" />
            <Aboutelem img={emad} name="Emad Alzoubi" github="https://github.com/3madov-77?tab=repositories" email="#" linkedin="#" facebook="#" major="Software Developer" />
            <Aboutelem img={nimrawi} name="Mohammad Nimrawi" github="#" email="#" linkedin="#" facebook="#" major="Software Developer" />

            
            </div>
            </>
        )
    }
}

