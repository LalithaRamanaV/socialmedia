import React from 'react'
import "./CloseFriend.css"

const CloseFriend = ({user}) => {
  return (
         <li className="sidebarFriend">
            <img className="sidebarFriendImg"src={user.profilePicture} alt=""/>
            <span className="sidebarFriendName">{user.username}</span>
          </li>
    
  )
}

export default CloseFriend