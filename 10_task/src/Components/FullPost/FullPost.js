import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FullPost.css";
import axios from "axios";

import postdata from "../../postdata";


const FullPost = () => {
  const [loadedPost, setLoadedPost] = useState();
  let { postId } = useParams();
  //let post = postdata.find((p) => p.id == postId);

useEffect(() => {
  //use fetch only when i dont have data yet
  if (!loadedPost) {
    axios.get('http://localhost:3001/posts/' + postId).then(
  (response) => {
    console.log(response.data);
    setLoadedPost(response.data)
  });
  }
});

let postData = undefined;
if (postId) {
  postData = <h1>Loading post</h1>;
}
if (loadedPost) {
  postData = (
    <div className="fullPost">
      <h1>Post {loadedPost.id}</h1>
      <p>{loadedPost.title}</p>
  <em>{loadedPost.author}</em>
      <img src={loadedPost.url} alt={loadedPost.title} />
    </div>
  )
}
  return postData; 
};

export default FullPost;
