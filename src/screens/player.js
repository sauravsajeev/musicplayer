import React, { useEffect , useState} from 'react';
import './style.css';
import "../shared/global.css";
import {useLocation} from 'react-router-dom';
import apiClient from '../spotify';
import Queue from '../components/player/queue';
import SongCard from '../components/player/SongCard';
import Audioplayer from '../components/player/audioplayer';


export default function Player() {
  const location = useLocation();
  const [tracks,setTracks]= useState([]);
  const [currentTracks,setCurrentTracks]= useState([]);
  const [currentIndex,setCurrentIndex]= useState(0);

  // console.log(location);
  useEffect(() => {
if(location?.state){
  console.log(location.state.id);
   apiClient.get("playlists/"+ location.state?.id + "/tracks")
   .then(res=> {
   console.log(res.data)
   setTracks(res.data.items);
   setCurrentTracks(res.data.items[0].track);
  });
}
 else{
  apiClient.get("me/top/tracks").then(function (response) {
console.log(response.data);
setTracks(response.data.items);
setCurrentTracks(response.data.items[0]);
  });
 }
  },[location.state])
  useEffect(() => {
    if (tracks[currentIndex]?.track) {
      setCurrentTracks(tracks[currentIndex]?.track);
    }
    else if (tracks[currentIndex]){
      setCurrentTracks(tracks[currentIndex]);
    }
  },[currentIndex,tracks]);

  return (
    <div className = "screen-container flex">
      <div className ="left-player-body">
           
           <Audioplayer cover = {currentTracks}/>
         
      </div>
      <div className='right-player-body'>
        <SongCard tracks={currentTracks}/>
        <Queue songs={tracks} index = {currentIndex} setCurrentIndex= {setCurrentIndex}/>
      </div>
    </div>
  )
}
