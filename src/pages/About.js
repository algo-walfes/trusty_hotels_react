import React, { Component } from 'react'
import Aboutelem from "../components/Aboutelem";
import nimrawi from "../images/download.png";
import Title from "../components/Title";


export default class About extends Component {
    render() {
        return (
            <>
            <div className="about-title">
            <Title title="about us"/>
            </div>
            <div className="featured-rooms-center aboutlist-center">
            <Aboutelem img={nimrawi} name="Mohammad Nimrawi" github="#" email="#" linkedin="#" facebook="#" major="Software Developer" />
            <Aboutelem img={nimrawi} name="Mohammad Nimrawi" github="#" email="#" linkedin="#" facebook="#" major="Software Developer" />
            <Aboutelem img={nimrawi} name="Mohammad Nimrawi" github="#" email="#" linkedin="#" facebook="#" major="Software Developer" />

            
            </div>
            </>
        )
    }
}

