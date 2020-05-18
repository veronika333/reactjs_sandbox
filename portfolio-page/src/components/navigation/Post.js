import React, { useEffect, useState } from "react";
import { useRouteMatch, Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const Post = () => {
const [loadedPost, setLoadedPost] = useState();
let { postId } = useParams();
useEffect(() => {
    //use fetch only when i dont have data yet
    if (!loadedPost) {
      axios.get('http://localhost:3001/postinfo/' + postId).then(
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
        <div className="singlePostBox">
        <Card className="singlePost">
<Card.Img variant="top" src={loadedPost.img} style={{width: '100%'}} alt={loadedPost.title} />
 <br/>       
<Card.Title>{loadedPost.title}</Card.Title>
<Card.Text>{loadedPost.desc}</Card.Text>
<Button variant="outline-info"><Link to="/blog" className="links">Go Back</Link></Button>
 <br/>
 </Card>
</div>
    )
  }
    return postData; 
}
// const Post = ({title, img, desc}) => {
//     return (
//         <div className="singlePostBox">
//             <Card className="singlePost">
// <Card.Img src={img} alt={title} />
        
//     <Card.Title>{title}</Card.Title>
//     <Card.Text>{desc}</Card.Text>
//     <Button variant="outline-info"><Link to="/blog" className="links">Go Back</Link></Button>
//             </Card>
//         </div>
//     );
// };
export default Post;