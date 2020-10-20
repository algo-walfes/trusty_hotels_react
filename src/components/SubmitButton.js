import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SubmitButton = () => {
    const { user, isAuthenticated } = useAuth0();
    return(
        isAuthenticated &&(
            <>
            <input type="text" name="user_email" value={user.email}/>
            <button type="submit">Add to FAV</button>
            </>
        )
    )
}

export default SubmitButton