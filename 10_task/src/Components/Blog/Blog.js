import React, { useState, useEffect } from "react";

import PostCard from "../PostCard/PostCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";

//import postdata from "../../postdata";
import FullPost from "../FullPost/FullPost";
import axios from "axios";

const Blog = () => {
  const [post, setPost] = useState([]);
  let match = useRouteMatch();

useEffect(() => {
  //axios.get("http://jsonplaceholder.typicode.com/photos")
  axios.get("http://localhost:3001/posts")
  .then((response) => {
const posts = response.data.slice(0, 10);
setPost(posts);
console.log(posts);
});
}, []);

// the[] above makes it use only once, not like infinite loop

const removeHandler = (id) => {
console.log(id);

axios.delete('http://localhost:3001/posts/' + id)
.then(() => {
  return axios.get("http://localhost:3001/posts");
})
.then(response => {
  setPost(response.data);
});
};

const PostList = post.map((p) => {
    return (
      <PostCard
        key={p.id}
        title={p.title}
        author={p.author}
        desc={p.desc}
        //img={p.img}
        img={p.thumbnailUrl}
        link={`${match.url}/${p.id}`}
        remove={() => removeHandler(p.id)}
      />
    );
  });

  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <FullPost />
        </Route>
        <Route path={match.path}>
          <div>
            <h1>Blog</h1>
            {PostList}
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Blog;
