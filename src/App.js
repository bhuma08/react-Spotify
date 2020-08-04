import React from 'react'
import Button from './components/like'
import All from './components/body'
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            likeOrDislike : "like"
        }
    }
    render() {
        let artist = [{
            name: "J Hus",
            img: "",
            genre: "Grime",
            intro: "",
            song: "Sekkle Down",
            album: ["Common Sense", "2017"]
        }, 
        {
            name: "J Cole",
            img: " ",
            genre: "Rap",
            intro: " ",
            song: "Power Trip",
            album: ["Born Sinner", "2013"]

        },
        {
            name: "Marc E. Bassy",
            img: " ",
            genre: "R'n'B",
            intro: " ",
            song: "New Ting",
            album: ["Gossip Columns", "2017"]
        },
        {
            name: "Jorja Smith",
            img: " ",
            genre: "R'n'B",
            intro: " ",
            song: "Be Honest",
            album: ["Lost & Found", "2018"]
        },
        {
            name: "Shakka",
            img: " ",
            genre: "R'n'B",
            intro: " ",
            song: "Yo Babes",
            album: ["The Island-EP", "2016"]
        },
        {
            name: "AJ Tracey",
            img: " ",
            genre: "Grime",
            intro: " ",
            song: "3AM",
            album: ["AJ Tracey", "2019"]
        }
    ]

        
  
      return (
          <main>
              <h1>Hello World!</h1>
              <Button 
              like = {this.state.likeOrDislike}
              clicked = {()=>{this.state.likeOrDislike = "Dislike"}}
              />
              <div id = "container">
                  <div id ="first">
              <p>Recommended Artists:</p>
              <ul>
                {artist.map((item, idx) => {
                return <li key = {idx}>{item.name}</li>})} 
              </ul>
              </div>
              <div id = "second">
              <p id = "second">Recommended Songs:</p>
              <ul>
                {artist.map((item, idx) => {
                return <li key={idx}>{item.song}</li>})} 
              </ul>
              </div>
              </div>
              <h1>Full Recommendation</h1>
              
              {artist.map((item, idx)=> {
                  return (
                      <All key = {idx}
                      name= {item.name} 
                      genre= {item.genre}
                      song= {item.song}
                      album= {item.album} >
                    
                    </All>
              )
              })}
               {/* <h3>Artist: {artist[0].name}</h3>
              <h3>Genre: {artist[0].genre}</h3>
              <h3>Song: {artist[0].song}</h3>
              <h3>Album: {artist[0].album[0]}, Released Year:{artist[0].album[1]}</h3> */}
          </main>
      )
    }
  }
export default App


