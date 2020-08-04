import React, { Component } from 'react'

class Button extends Component {
    constructor(){
        super()
        this.state = { 
            likeOrDislike: true,
         }
    }
    opinion = () => {
        this.setState(prevState => ({ likeOrDislike: !prevState.likeOrDislike}))
    }

    render() {
        return (
            <div>
            <h2> I {this.state.likeOrDislike ? "Like" : "Dislike"} </h2>
            
            <button onClick = {this.opinion}>Click to Like/Unlike</button>
            </div>
        )
    }
}




export default Button;