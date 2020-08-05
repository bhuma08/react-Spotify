import React, { Component } from 'react'

class Button extends Component {
    constructor(){
        super()
        this.state = { 
            likeOrDislike: true,
         }
        this.opinion = this.opinion.bind(this);
    }
    opinion = () => {
        this.setState(prevState => ({ likeOrDislike: !prevState.likeOrDislike}))
    }

    // componentDidMount(){
    //     console.log("component did mount");
    // }

    // componentDidUpdate(prevProps, prevState){
    //     console.log("component did update!", prevProps, prevState)
    // }

    // componentWillUnmount(){
    //     console.log("component will unmount")
    // }

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