import React from 'react'
import Favourite from "./favourite";
import  Feed  from "./feed";
import  Library  from "./librarys";
import  Player  from "./player";
import  Trending  from "./trending";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./style.css";
import "../shared/global.css";
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <Router>
        <div className = "main-body">
       
        <Sidebar />
        <div className = "screen-container">
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/player" element={<Player />} />
            <Route path="/trending" element={<Trending />} />
        </Routes>
       </div>
        </div>
    </Router>
  )
}
