import React from 'react';
// import { Link } from 'react-router-dom';

function CommentSection(){
    return (
        <div>
            {/* <Link to="/comments"></Link> */}
            <input type="text" placeholder="Write a comment here" id="comment" name="comment"></input>
            <input type="submit" placeholder="Done" id="submit" name="submit"></input>
        </div>
    )
}



export default CommentSection;