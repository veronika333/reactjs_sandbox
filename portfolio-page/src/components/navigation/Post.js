import React from 'react';
import { useRouteMatch, Link, useParams } from "react-router-dom";
import postinfo from "./postinfo";


const Post = () => {
    let { postId } = useParams();
    let post = postinfo.find((p) => p.title === postId);
    return (
        <div className="singlePostBox">
            <div className="singlePost">
<img src={post.img} alt={post.title} />
            </div>
            <div>
    <h1>{post.title}</h1>
    <p>{post.desc}</p>
    <Link to="/blog">Back to Blog page</Link>
            </div>
        </div>
    );
};
export default Post;