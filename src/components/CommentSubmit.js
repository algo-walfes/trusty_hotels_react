import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const CommentSubmit = () => {
    const { user, isAuthenticated } = useAuth0();
    return(
        isAuthenticated &&(
            <>
            <div className="add-new-com">
            <input type="text" name="useremail" value={user.email} className="hidden"/>
            <input type="text" name="comment" className="comment-text-field" />
            <button type="submit" className="comment-button">Add Comment</button>
            </div>
            </>
        )
    )
}

export default CommentSubmit