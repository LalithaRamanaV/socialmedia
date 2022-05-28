import React from 'react'
import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Topbar = () => {
  return (
    <div className="topbarContainer">
     <div className="topbarLeft">
       <span className="logo">SocialMedia</span>
     </div>
     <div className="topbarCenter">
       <div className="searchbar">
          <SearchIcon className="searchIcon"/>
          <input placeholder="Search for friends post" className="searchInput" />
       </div>
     </div>
     <div className="topbarRight">
       <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
       </div>
       <div className="topbarIcons">
         <div className="topbarIconItem">
           <PersonIcon/>
           <span className="topbarIconBadge">1</span>
         </div>
         <div className="topbarIconItem">
           <ChatBubbleIcon/>
           <span className="topbarIconBadge">1</span>
         </div>
         <div className="topbarIconItem">
           <NotificationsIcon/>
           <span className="topbarIconBadge">1</span>
         </div>
       </div>
       <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
     </div>
    </div>
  )
}

export default Topbar