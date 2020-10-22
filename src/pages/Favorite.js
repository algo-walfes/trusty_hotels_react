import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FavoriteContainer from "../components/FavoriteContainer";
import { useAuth0 } from '@auth0/auth0-react';


const Favorite = () => {
  const { user } = useAuth0();
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <FavoriteContainer user={user} />
    </>
  );
};

export default Favorite;