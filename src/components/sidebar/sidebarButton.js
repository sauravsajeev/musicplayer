import React from 'react';
import {Link,useLocation} from "react-router-dom";
import "./sidebar.css";


export default function SidebarButton(props) {
    const location =  useLocation();
    const isActive =  location.pathname === props.to;
    const btnAclass = isActive ? "iconsactive" : "sidebar-icons";
  return( <Link to = {props.to}>
<div>
   <img className = {btnAclass} src = {props.icon}  alt = "icons"></img>
</div>
  </Link>
  );
}
