import React from 'react';
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
export default function Sidebar() {
  return (
    <div className = "sidebar-container">
     <div className = "icon-container">
      <SidebarButton  to = "/"  icon="https://img.icons8.com/?size=100&id=83326&format=png&color=000000" />
      <SidebarButton  to = "/library"  icon="https://img.icons8.com/?size=100&id=113920&format=png&color=000000" />
      <SidebarButton  to = "/favourite"  icon="https://img.icons8.com/?size=100&id=114074&format=png&color=000000" />
      <SidebarButton  to = "/trending"  icon="https://img.icons8.com/?size=100&id=WJjEICrirGPP&format=png&color=000000" />
     </div>
    </div>
  )
}
