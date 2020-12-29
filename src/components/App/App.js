import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Archives from "../Archives";
import Homepage from "../Homepage";
import Navbar from "../Navbar";
// import Ticker from "../Ticker";

import './styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Ticker /> */}
      <Route path="/" exact component={Homepage} />
      <Route path="/archives" exact component={Archives} />
    </BrowserRouter>
  )
}

export default App
