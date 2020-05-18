import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const FormPage = () => {
  const [newPost, setNewPost] = useState({
    id: "",
    title: "",
    desc: "",
    img: "",
  });

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/postinfo", newPost).then((response) => {
      console.log(response.data);
    });
  };
    return (
      <div>
        <br/>
      <h1>CREATE YOUR OWN POST</h1><br/>
        <Form className="messageForm">
  <Form.Group controlId="formBasicNumber">
    <Form.Label>Number of post</Form.Label>
    <Form.Control type="number" name="id" id="id" onChange={changeValueHandler} placeholder="Number of post" />
  </Form.Group>
  <Form.Group controlId="formBasicSubject">
    <Form.Label htmlFor="title">Title</Form.Label>
    <Form.Control type="text" name="title" id="title" onChange={changeValueHandler} placeholder="Type the title" />
  </Form.Group>
  <Form.Group controlId="formBasicMessage">
    <Form.Label htmlFor="desc">Your post</Form.Label>
    <Form.Control as="textarea" rows="4" type="text" name="desc" id="desc" onChange={changeValueHandler} placeholder="Type your post here..." />
  </Form.Group>
  <Form.Group>
  <Form.Label htmlFor="img">Image</Form.Label>
  <Form.Control type="text" name="img" id="img" onChange={changeValueHandler} placeholder="Paste the image URL" />
  </Form.Group>
  <Button variant="info" onClick={addPostHandler} type="submit">
    Submit
  </Button>
</Form>
</div>
      );  
}
export default FormPage;