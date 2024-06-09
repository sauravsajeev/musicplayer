 import React,{useState,useEffect} from 'react'
import "../shared/global.css"
import APIKit  from '../spotify';
import "./style.css";

export default function Library() {
  
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);


  return (<div className = "screen-container">
   
    <div className = "lib-head">Playlist Collection</div>

    <div className ="library-body">
    {playlists?.map((playlist) => (
          <div className="playlist-card">
            <div className = "outline-card">
            <img src ={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <div className='playDES'>
              <div className='playTitle'>{playlist.name}</div>
              <div className='playNum'>Total Songs:{playlist.tracks.total}</div>
              </div>
            </div>
            </div>
          ))}
  </div>
  </div>
);
}

