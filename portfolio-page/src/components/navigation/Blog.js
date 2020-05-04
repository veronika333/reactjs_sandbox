import React from 'react';
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import postinfo from "./postinfo";
import Post from "./Post";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Blog = () => {
  let match = useRouteMatch();

  const postList = postinfo.map((postinfo) => {
return (
  
        <div key={postinfo.id}>
         
           
            <Card>
  <Card.Img variant="top" src={postinfo.img} style={{width: '100%'}} alt={postinfo.title} />
  <Card.Body>
    <Card.Title>{postinfo.title}</Card.Title>
    <Card.Text>
      {postinfo.desc}
    </Card.Text>
    <Button variant="outline-info"><Link className="links" to={`${match.url}/${postinfo.title}`}>Read more</Link></Button>
  </Card.Body>
</Card>

</div>
    );
  });
  return (
    <div>
      <Switch>
        <Route path="/blog/:postId">
          <Post />
        </Route>
        <div className="wrapper">
  <Route path={match.path}>{postList}</Route></div>
      </Switch>
    </div>
  );  
};

export default Blog;