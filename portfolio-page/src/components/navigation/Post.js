import React from 'react';
import { useRouteMatch, Link, useParams } from "react-router-dom";
import postinfo from "./postinfo";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = () => {
    let { postId } = useParams();
    let post = postinfo.find((p) => p.title === postId);
    return (
        <div className="singlePostBox">
            <Card className="singlePost">
<Card.Img src={post.img} alt={post.title} />
        
    <Card.Title>{post.title}</Card.Title>
    <Card.Text>{post.desc}</Card.Text>
    <Button variant="outline-info"><Link to="/blog" className="links">Go Back</Link></Button>
            </Card>
        </div>
    );
};
export default Post;