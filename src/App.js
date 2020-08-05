import React from 'react'
import Button from './components/like'
import All from './components/body'
import Useless from './components/error'
import CommentSection from './components/comment'
import { Switch, Route } from 'react-router-dom';
import { useArtist } from 'react-spotify-api';

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
        }],
            counter : 0,
            token: "BQATeMiCC1bM-UOoPiy0RElFdycEQOtsQSz6BwMdT-ezwA9rKKzAugqEroXCmPd95BJL0XViE3YTNWDC8skQB-iuzqgReKGrlpm8BPeKdcDvxPlMtiiRjqLdkWBkwYf12nKHwka0oAnzNRJj7us_J5T-WagX_Z2yYPM"

        }
    }

    componentDidUpdate (prevProp, prevState, SnapShot){
        
        if(prevState.counter == 3){
            console.log("low")
            this.setState({counter: "Welcome"})
            
        }
    }
    
    render(){
      return (
          <main>
            <ExampleHooks id={"0cGUm45nv7Z6M6qdXYQGTX"}/>
            <ExampleHooks id={"5pKCCKE2ajJHZ9KAiaK11H"} />
            <ExampleHooks id={"2a0uxJgbvvIRI4GX8pYfcr"} />
            <ExampleHooks id={"3wcj11K77LjEY1PkEazffa"} />
      
            {/* <button onClick = {()=> this.setState({counter: this.state.counter+1})}>{this.state.counter}</button>
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
              }  */}

            </main>
        )
    }        
}


function ExampleHooks(props) {
    const { data, loading, error } = useArtist(props.id);
    let artist = data;

    console.log(artist)
   
    return artist ? (
      <div>
        <h1>{artist.name}</h1>
        <ul>
          {artist.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <img src={artist.images[2].url}></img>
      </div>
    ) : null;
}


export default App


