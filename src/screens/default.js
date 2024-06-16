import React from 'react';
import "./style.css";

export default function WelcomeScreen() {
  return (
    <div className = "HomeContainer">
        <div className='HeadNAME'>
             <div className='welcomeLogo word'>WELCOME TO</div>
          <img src = "../../images/SPOTIFY2.png" className='spotifylogo' alt='SPOTIFY'></img>
        </div>
        <div className='desc'>
           Welcome to TuneStream, your ultimate music companion! Explore millions of tracks and playlists with our sleek, React-powered music player, seamlessly integrated with the Spotify Web API.
            Dive into a world of endless musical possibilities, discover new favorites, and enjoy your personalized soundtrack anywhere, anytime. Let the music play!
        </div>
       
        <a className ='btn-grad' href = "/library" >Library</a>
  
    </div>
  )
}
