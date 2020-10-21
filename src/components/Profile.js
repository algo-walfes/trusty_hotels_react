import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log(user)
    return(
        isAuthenticated &&(
            <div>
                <img src={user.picture} className="profile-pic"></img>
                <JSONPretty data={user.name} className="profile-nav"/>
            </div>
        )
    )
}

export default Profile