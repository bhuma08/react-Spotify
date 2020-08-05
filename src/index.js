import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App.js"
import { BrowserRouter } from 'react-router-dom';
import { SpotifyApiContext } from 'react-spotify-api';
import "./App.css"
ReactDOM.render(
  <SpotifyApiContext.Provider
  value = {"BQATeMiCC1bM-UOoPiy0RElFdycEQOtsQSz6BwMdT-ezwA9rKKzAugqEroXCmPd95BJL0XViE3YTNWDC8skQB-iuzqgReKGrlpm8BPeKdcDvxPlMtiiRjqLdkWBkwYf12nKHwka0oAnzNRJj7us_J5T-WagX_Z2yYPM"}>
  <BrowserRouter>
  <App />
  </BrowserRouter>, 
  </SpotifyApiContext.Provider>,

  document.getElementById('root')
)

