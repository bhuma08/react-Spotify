import React from 'react'
import Button from './components/like'
import All from './components/body'
import Useless from './components/error'
import CommentSection from './components/comment'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(){
        super();

        this.state = {

            artist:[{
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
        }]

        }

    }
     
    
    render(){
      return (
          <main>
              <section >
                  <Switch>
                      <Route exact path = "/" render={()=><h1>Hello World!</h1> } />
                      <Route path="/comments" component={CommentSection} />
                      <Route component={Useless}/>
                  </Switch>
              </section>
              
              <Button ></Button>
              <div id = "container">
                  <div id ="first">
              <p>Recommended Artists:</p>
              <ul>
                {this.state.artist.map((item, idx) => {
                    
                return <li key = {idx}>{item.name}</li>})} 
              </ul>
              </div>
              <div id = "second">
              <p id = "second">Recommended Songs:</p>
              <ul>
                {this.state.artist.map((item, idx) => {
                return <li key={idx}>{item.song}</li>})} 
              </ul>
              </div>
              </div>

              <CommentSection></CommentSection>

              <h1>Full Recommendation</h1>
              
              {this.state.artist.map((item, idx)=> {
                  return (
                      <All key = {idx}
                      name= {item.name} 
                      genre= {item.genre}
                      song= {item.song}
                      album= {item.album} >
                    
                    </All>
                    )
                })
              } 
            </main>
        )
    }       
    
}
export default App


