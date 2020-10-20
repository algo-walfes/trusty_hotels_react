import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";

const FavoriteLink = () => {
    const { isAuthenticated } = useAuth0();
    return(
        isAuthenticated &&(
            <li>
                <Link to="/favorite">Favorite</Link>
            </li>
        )
    )
}

export default FavoriteLink
