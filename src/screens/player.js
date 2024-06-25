import React, { useEffect , useState} from 'react';
import './style.css';
import "../shared/global.css";
import {useLocation} from 'react-router-dom';
import apiClient from '../spotify';
import Queue from '../components/player/queue';
import SongCard from '../components/player/SongCard';

export default function Player() {
  const location = useLocation();
  const [tracks,setTracks]= useState([]);
  const [currentTracks,setCurrentTracks]= useState([]);
  const [currentIndex,setCurrentIndex]= useState(0);

  // console.log(location);
  useEffect(() => {
if(location.state){
   apiClient.get("playlists/"+ location.state?.id + "/tracks")
   .then(res=> {
   // console.log(res.data)
   setTracks(res.data.items);
   setCurrentTracks(res.data.items[0].track);
  });
}
  },[location.state])
  return (
    <div className = "screen-container flex">
      <div className ="left-player-body">

      </div>

      <div className='right-player-body'>
        <SongCard tracks={currentTracks}/>
        <Queue songs={tracks} index = {currentIndex}/>
      </div>
    </div>
  )
}
