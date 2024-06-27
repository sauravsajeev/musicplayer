import React from 'react';
import "./player.css";
export default function SongCard({tracks}) {
  return (
    <div className='songCard-body'>
         <img src={tracks?.album?.images[0].url} alt = "coverImage" className='song-coverimg'></img> 
         <div className='song-details'>
            <div className='CTitle'>{tracks?.album?.name}</div>
            <div className='CTitle CName'>{tracks?.name}...</div>
         </div>
         <div className='nec-details'>
            <div className='artist'>{tracks?.album?.name} is an album by {tracks?.album?.artists[0]?.name} {tracks?.album?.artists[1]?.name} {tracks.album?.artists[2]?.name}</div>
            <div className='release'>Release-Date : {tracks.album?.release_date}</div>
         </div>
    </div>
  )
}
