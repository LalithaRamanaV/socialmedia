import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'


const Home = () => {
  return (
    <>
    <Topbar/>
    <div className="homeContainer"></div>
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </>
  )
}

export default Home