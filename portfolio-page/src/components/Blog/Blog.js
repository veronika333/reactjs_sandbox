
import React, { useState, useEffect } from "react";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
//import postinfo from "./postinfo";
import Post from "../Post/Post";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './Blog.css';

const Blog = () => {
  const [post, setPost] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:3001/postinfo")
    .then((response) => {
      const posts = response.data;
      setPost(posts);
console.log(posts);
  });
}, []);

const removeHandler = (id) => {
  console.log(id);
  
  axios.delete('http://localhost:3001/postinfo/' + id)
  .then(() => {
    return axios.get("http://localhost:3001/postinfo");
  })
  .then(response => {
    setPost(response.data);
  });
  };

  const PostList = post.map((p) => {
  
    return (
      <div className="wrapper" key={p.id}>
       
         <Card>
<Card.Img variant="top" src={p.img} style={{width: '100%'}} alt={p.title} />
<Card.Body>
<Card.Title>{p.title}</Card.Title>
<Card.Text>
 {p.desc}
</Card.Text>
<Button variant="outline-info"><Link className="links" to={`${match.url}/${p.id}`}>Read more</Link></Button>
<Button variant="outline-info" onClick={() => removeHandler(p.id)}>Delete</Button>
</Card.Body>
</Card>

    </div>
    )
  });
  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <Post />
        </Route>
        <Route path={match.path}>
          <div className="postsBox">
            <br/>
            <h1>LATEST POSTS</h1>
            {PostList}
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Blog;