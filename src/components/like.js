import React from 'react'


function Button (props) {
    
    return (
        <div>
            <h2>I {props.like}!</h2>
            <button onClick = {props.clicked}>Click to Like/Unlike</button>
        </div>
    )
}


export default Button;