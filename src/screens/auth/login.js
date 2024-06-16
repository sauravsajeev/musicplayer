import React from 'react'
import { loginENDPOINT } from '../../spotify'
import "../../shared/global.css";


export default function Login() {
  return (
    <div className = "login-page">
        <a className = "signin" href ={loginENDPOINT}><img className = "spotifylogo"  src = "../../images/SPOTIFY.png" alt = "spotify"></img> 
       </a>
    </div>

  )
}
