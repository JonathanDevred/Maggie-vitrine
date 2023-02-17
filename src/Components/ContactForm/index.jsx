import React, { useState } from 'react';

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
  <div className="page">
    <form onSubmit={handleSubmit}>
      <span>Email:</span> <br />
      <label className='contact-email'>
        <input type="email" name="email" placeholder='email@example.com' onChange={handleChange} value={formData.email} />
      </label>
      <br />
      <span>Message :</span> <br />
      <label className='contact-message'>
        
        <textarea name="message" placeholder='Votre message..' rows="5" cols="50" onChange={handleChange} value={formData.message} />
      </label>
      <br />
      <button type="submit" className='submit-contact-form'>Envoyer</button>
    </form>
  </div>
  );
}

export default ContactForm;