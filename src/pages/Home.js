import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeturedRooms from "../components/FeaturedRooms";
const Home = () => {
    return (
        <>
        <Hero>
        <Banner
          title="trusty hotels"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
        </Hero>
        <Services />
        <FeturedRooms />

        </>
    )
}

export default Home


