import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Archives from "./components/Archives";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Ticker />
      <Route path="/" exact component={Homepage} />
      <Route path="/archives" exact component={Archives} />
    </BrowserRouter>
  )
}

export default App
