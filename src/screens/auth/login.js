import React from 'react'
import { loginENDPOINT } from '../../spotify'



export default function Login() {
  return (
    <div className = "login-page">
        <a href ={loginENDPOINT}>login</a>
    </div>

  )
}
