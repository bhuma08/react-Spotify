import React, { Component } from 'react';

class Spotify extends Component {
    constructor(){
        super();
        
    
    this.state = {
        person: " "
    }

    }

    async componentDidMount(){
        // API - using try, await, catch
        try {
            const response = await fetch("https://api.randomuser.me/")
            const data = await response.json();
            console.log(data.results[0].name.title)
            this.setState({ person: data.results[0] })
        }catch(err){
            console.log(err)
        }

        //API - fetch
    //     const url = "https://api.randomuser.me/"
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(
    //         (data)=> {
    //             this.setState({
    //                 person: data.results[0]
    //             })  
    //         })
    //     .catch(console.error())  

        //API - async, await
        // const url = "https://api.randomuser.me/";
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({ person: data.results[0]})

    }

    render() {
       
        return (
            <div>
                <h1>Practice</h1>
                <div>
                <div>Gender: {this.state.person.gender}</div>
                <div>Email: {this.state.person.email}</div>
                {/* <div>Name: {this.state.person.name.first} </div> */}
                {/* <img src = {this.state.person.picture.large}  /> */}
                </div>
            </div>
        )
    }
}

export default Spotify