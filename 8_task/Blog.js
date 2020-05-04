import React from 'react';

const Blog = (props) => {
    return (
        <div className="blog" onClick={props.click}>
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
    <p>{props.desc}</p>
        </div>
    );
    
};

export default Blog;