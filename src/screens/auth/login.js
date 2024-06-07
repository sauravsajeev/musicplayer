import React from 'react'
import { loginENDPOINT } from '../../spotify'



export default function Login() {
  return (
    <div class = "login-page">
        <a href ={loginENDPOINT}>login</a>
    </div>

  )
}
