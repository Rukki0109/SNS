import React, { useEffect, useState } from 'react'
import "./Timeline.css"
import Share from '../share/Share'
import Post from '../post/Post'
import axios from "axios";
//import {Posts} from "../../dummyData"

export default function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async()=>{
      const response = await axios.get(
        "/posts/timeLine/67ab917e5e50b70f8acfed55"
      );
      // console.log(response);
      setPosts(response.data);
    }
    fetchPosts();
  },[]);

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post = {post} key ={post.id}/>
        ))}
      </div>
    </div>
  )
}
