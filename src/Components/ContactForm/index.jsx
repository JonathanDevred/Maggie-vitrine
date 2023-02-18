import React, { useState } from 'react';
import { Button, Input, Form, TextArea } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import "./style.scss"


function ContactForm() {

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);


  }



  return (
  <div className="form-container">
    <h2 className='form-subtitle'>Me contacter</h2>
    <Form>
      <Form.Field>
      <span>Email:</span> <br />
      <label className='contact-email'>
        <Input focus type="email" name="email" placeholder='email@example.com' onChange={handleChange} value={formData.email} />
      </label>
      </Form.Field>
      <br />
      <Form.Field>
      <span>Message :</span> <br />
      <label className='contact-message'>
        <TextArea name="message" placeholder='Votre message..' rows="5" cols="50" onChange={handleChange} value={formData.message} />
      </label>
      </Form.Field>
      <br />
      <Button onClick={handleSubmit} className='submit-contact-form'>Envoyer</Button>
    </Form>
  </div>
  );
}

export default ContactForm;