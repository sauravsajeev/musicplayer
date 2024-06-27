import React from 'react';
import "./player.css";
import SpotifyPlayer from  'react-spotify-web-playback';
export default function Audioplayer({cover}) {
    console.log(cover);
  return (
    <div className='audioplayer'>
        <div className='disc'> 
            <div className='discdiv'>
            <img className= 'discimg' src='../../images/disc.png' alt='song'></img>
            <img src={cover.album?.images[0].url} alt='' className='disccover'></img> 
            </div>
        </div>
        <div className='controls'>
            <div className='playsongname'>{cover?.name}</div>
            <div className='song-controls'>
            <SpotifyPlayer token={window.sessionStorage.getItem("token")}
           showSaveIcon
           uris={cover.uri}/>
            </div>
        </div>
    </div>
  )
}
