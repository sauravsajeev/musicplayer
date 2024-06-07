import React ,{useEffect , useState } from 'react';
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import apiClient from '../../spotify';
export default function Sidebar() {
  const [image,setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
   useEffect(() => {
    apiClient.get("me").then((response) => {
      console.log(response.data.images[0].url);
    });
  }, []);
  return (
    <div className = "sidebar-container">
     <div className = "icon-container">
      <SidebarButton  to = "/"  icon="https://img.icons8.com/?size=100&id=83326&format=png&color=000000" />
      <div class =  "profilecontainer">
      <SidebarButton  to = "/library"  icon="https://img.icons8.com/?size=100&id=113920&format=png&color=000000" />
      <img src={image} className="profile-img" alt="profile" />
      <SidebarButton  to = "/favourite"  icon="https://img.icons8.com/?size=100&id=114074&format=png&color=000000" />
      </div>
      <SidebarButton  to = "/trending"  icon="https://img.icons8.com/?size=100&id=WJjEICrirGPP&format=png&color=000000" />
     </div>
    </div>
  )
}
