import React from 'react';
import "./player.css";
export default function Queue({songs,index,setCurrentIndex}) {
  console.log(songs);
  return songs[0]?.track ?(
    <div className='queued-songs'>
        <div className='headqueue'>Up Next</div>
        <div className='songlist'>
          {songs?.map((song,indexs) => {
            return indexs === index ?(
            <div className='songnames currents' key = {song?.track?.id}>
              <div className="eachsong ">{song?.track?.name}</div>
              <img className="playbar" src='../../images/bars.webp' alt="***" />
              <div className="sduration">{Math.ceil(song?.track?.duration_ms/1000/60)}:{((((song?.track?.duration_ms % 60000) / 1000).toFixed(0)) < 10 ? '0' : '')}{((song?.track?.duration_ms % 60000) / 1000).toFixed(0)}</div>
            </div>):(
                <div className='songnames' key = {song?.track?.id} onClick={()=> setCurrentIndex(indexs)}>
                <div className="eachsong">{song?.track?.name}</div>
                <div className="sduration">{Math.ceil(song?.track?.duration_ms/1000/60)}:{((((song?.track?.duration_ms % 60000) / 1000).toFixed(0)) < 10 ? '0' : '')}{((song?.track?.duration_ms % 60000) / 1000).toFixed(0)}</div>
                </div>
            );
})}
          </div>
    </div>
):(
  <div className='queued-songs'>
        <div className='headqueue'>Favourite Songs</div>
        <div className='songlist'>
          {songs?.map((song,indexs) => {
            return indexs === index ?(
            <div className='songnames currents' key = {song?.id}>
              <div className="eachsong ">{song?.name}</div>
              <img className="playbar" src='../../images/bars.webp' alt="***" />
              <div className="sduration">{Math.ceil(song?.duration_ms/1000/60)}:{((((song?.duration_ms % 60000) / 1000).toFixed(0)) < 10 ? '0' : '')}{((song?.duration_ms % 60000) / 1000).toFixed(0)}</div>
            </div>):(
                <div className='songnames' key = {song?.id} onClick={()=> setCurrentIndex(indexs)}>
                <div className="eachsong">{song?.name}</div>
                <div className="sduration">{Math.ceil(song?.duration_ms/1000/60)}:{((((song?.duration_ms % 60000) / 1000).toFixed(0)) < 10 ? '0' : '')}{((song?.duration_ms % 60000) / 1000).toFixed(0)}</div>
                </div>
            );
})}
          </div>
    </div>
)
}; 
