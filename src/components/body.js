import React from 'react'

function All (props){
    return (
        <div>
        <h3>{props.name}</h3>
        <h3>{props.genre}</h3>
        <h3>{props.song}</h3>
        <ul>{props.album.map((item, idx) =>{
            return<li key ={idx}>{item}</li>
        })}</ul>
        
        <hr></hr>
        </div>
    )
}

export default All;