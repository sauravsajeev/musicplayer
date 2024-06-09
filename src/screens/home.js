import React,{ useState ,useEffect} from 'react';
import Favourite from "./favourite";
import  Feed  from "./feed";
import  Library  from "./library";
import  Trending  from "./trending";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./style.css";
import "../shared/global.css";
import Sidebar from '../components/sidebar';
import Login from './auth/login';
import { setClientToken} from '../spotify';


export default function Home() {
  const [token,setToken] = useState("");
  useEffect(() =>{
    const token = window.localStorage.getItem("token");
    const hash= window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
   const _token = hash.split("&")[0].split("=")[1];
   window.localStorage.setItem("token", _token);
   setToken(_token);
  setClientToken(_token);
    }
    else{
      setToken(token);
      setClientToken(token);
    }

  },[]);
  return !token ?(
    <Login/>
  ):(
    <Router>
        <div className = "main-body">
        <Sidebar />
        <div className = "screen-container">
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/library" element={<Library />} />
            <Route path="/trending" element={<Trending />} />
        </Routes>
       </div>
        </div>
    </Router>
  );
}
