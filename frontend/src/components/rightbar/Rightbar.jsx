
import { Users } from "../../dummyData"
import React from 'react'
import "./Rightbar.css"

export default function Rightbar(){
  return (
    <div className="rightbar">
       <div className="rightbarWrapper">
         <div className="birthdayContainer">
           <img src="/assets/gift.png" alt="" className="birthdayImg" />
           <span className="birthdayText">
             <b>Bunny</b> and <b>3 others have a</b> birthday today
           </span>
         </div>
         <img src="/assets/ad.png" alt="" className="rightbarAd" />
         <h4 className="rightbarTitle">Online Friends</h4>
         <ul className="rightbarFriendList">
          
         </ul>
       </div>
    </div>
  )
}

