 import React,{useState,useEffect} from 'react'
import "../shared/global.css"
import APIKit  from '../spotify';
import "./style.css";
import { useNavigate } from 'react-router-dom';
export default function Library() {
  
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);
const navigate = useNavigate();
 const playPlaylist = (id) => {
    navigate("/player", {state:{id : id}})
 }
  return (<div className = "screen-container">
   
    <div className = "lib-head">Playlist Collection</div>

    <div className ="library-body">
    {playlists?.map((playlist) => (
          <div className="playlist-card" key={playlist.id} onClick={()=> playPlaylist(playlist.id)}>
            <div className = "outline-card">
            <img src ={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <div className='playDES'>
              <div className='playTitle'>{playlist.name}</div>
              <div className='playNum'>Total Songs:{playlist.tracks.total}</div>
              
              
            </div>
            <div className='animeplay'>
                  <img src ="../../images/spotify.gif"
                  className="playlogo"
                  alt="Playlist-Art"
                 />
               </div>
            </div>
            </div>
          ))}
  </div>
  </div>
);
}

