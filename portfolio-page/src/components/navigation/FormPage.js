import React from 'react';
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FormPage = () => {
    return (
        <Form className="messageForm">
          <h1>Connect with me</h1><br/>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
    
  </Form.Group>

  <Form.Group controlId="formBasicSubject">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="text" placeholder="Type the subject" />
  </Form.Group>
  <Form.Group controlId="formBasicMessage">
    <Form.Label>Your message</Form.Label>
    <Form.Control as="textarea" rows="4" type="text" placeholder="Type your message here..." />
  </Form.Group>
  <Button variant="info" type="submit">
    Submit
  </Button>
</Form>
      );  
}
export default FormPage;