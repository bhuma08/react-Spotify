import React, { Component } from 'react';

class Spotify extends Component {
    constructor(){
        super();
        
    
    this.state = {
        data: false
    }

    }

    async componentDidMount(){
        //API
        // let url ="https://api.randomuser.me/";
        // let url = "https://api.spotify.com/v1/artists/37i9dQZF1DXbjiU2ByCldP"
        // fetch(url, {
        //     // mode: 'no-cors',
        //     method: 'GET',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type': 'application/json',
        //     }
        // }).then((result)=>{
        //     result.json().then((resp)=>{
        //         console.warn(resp)
        //     })
        // })

        try {
            const response = await fetch("https://api.randomuser.me/")
            const data = await response.json();
            console.log(data)
        }catch(err){
            console.log(err)
        }

    
        // const url = "https://api.spotify.com/v1/artists/37i9dQZF1DXbjiU2ByCldP"
        // fetch(url)
        // .then(res => res.json())
        // const interval = setInterval(()=>{
        //     console.log(res)
        // }, 1000);
        // .catch(error)
    }

    render() {
        return (
            <div>
                <h1>Practice</h1>


            </div>
        )
    }
}

export default Spotify