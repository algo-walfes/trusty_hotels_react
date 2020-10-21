import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const CommentSubmit = () => {
    const { user, isAuthenticated } = useAuth0();
    return(
        isAuthenticated &&(
            <>
            <input type="text" name="useremail" value={user.email}/>
            <input type="text" name="comment" />
            <button type="submit">Add My Comment</button>
            </>
        )
    )
}

export default CommentSubmit