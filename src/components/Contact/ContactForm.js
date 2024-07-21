import React, { useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

function ContactForm(props) {
  const [userDetail, setUserDetail] = useState({name: '',email: '', message: '' });
  const [msg, setMsg] = useState({ text:'',color:''});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetail((prevUserDetail) => ({
      ...prevUserDetail,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if(!userDetail.name || !userDetail.email || !userDetail.message) {
      setMsg(()=>{
        return {text:'Please enter all fields', color:'redErr'}
      });
    }else{
      setMsg(()=>{
        return {text:'Your message has been sent. Thank you', color:'purple'}
      });
    }
  };
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className={msg.color}>{msg.text}</Card.Title>
        <Form>
          <Form.Group controlId="formBasicName" md="6">
            <Form.Label className="contact-label">Name</Form.Label>
            <Form.Control style={{ border: "3px solid purple" }} type="text" name="name" placeholder="Enter your name" value={userDetail.name} onChange={handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail" md="6">
            <Form.Label className="contact-label" >Email address</Form.Label>
            <Form.Control style={{ border: "3px solid purple" }} className="contact-input" type="email" name="email" placeholder="Enter email"  value={userDetail.email}
              onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicMessage" md="6">
            <Form.Label className="contact-label">Message</Form.Label>
            <Form.Control style={{ border: "3px solid purple" }} name="message"  as="textarea" rows={2}
              placeholder="Enter your message" value={userDetail.message} onChange={handleInputChange} />
          </Form.Group><br/>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ContactForm;
