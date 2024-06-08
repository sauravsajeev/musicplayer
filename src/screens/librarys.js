import React,{useState,useEffect} from 'react'
import "../shared/global.css"
import apiClient from '../spotify';
import "./style.css";

export default function Library() {
  const [playlists,setPlaylists] = useState(null);

  useEffect(()=>{
    apiClient.get("me/playlists").then(function(response){
    setPlaylists(response.data.items);
    console.log(response.data.items)
    });
  },[]);
  return (<div className = "screen-container">
    <div className ="library-body">
    {playlists?.map((playlist) =>(
      <div className="playcard">{playlist.name}</div>
    ))}
  </div>
  </div>
);
}
