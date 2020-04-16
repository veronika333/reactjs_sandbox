import React, { Component } from 'react';
import Post from "./Post/Post";

const posts = [
  {
    id: 1,
      title: "This is a title",
      author: "Elene Ivanko",
      desc: "Lorem text would be hereIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      img: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 2,
      title: "This is a title",
      author: "Elene Ivanko",
      desc: "Lorem text would be hereIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      img: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 3,
      title: "This is a title",
      author: "Elene Ivanko",
      desc: "Lorem text would be hereIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
  },
];

 class App extends Component {
   state = {
     posts: posts,
   };

   removeHandler = removeId => {
     const oldArray = [...this.state.posts];
     oldArray.splice(removeId, 1);
     this.setState({ posts: oldArray });
   }

  render() {
const postsList = this.state.posts.map((post, index) => {
  return (
    <Post 
    key={post.id}
    title={post.title} 
    author={post.author}
    desc={post.desc} 
    img={post.img} 
    click={this.removeHandler.bind(this, index)}
    />
  );
});
    return <div className="posts">{postsList}</div>;
  }
}
export default App;