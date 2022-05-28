import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./Feed.css"

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed