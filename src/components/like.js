import React from 'react'

<h2>I have 1 like!</h2>

const likeOrUnlike =()=>{
    console.log("Like or Unlike!")
}

function Button () {
  
    return <button onClick = {likeOrUnlike}>Click to Like/Unlike</button>
}


export default Button;