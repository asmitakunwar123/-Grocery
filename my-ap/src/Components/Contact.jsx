// ContactForm.js
import React, { useState } from 'react';
import './Contact.css';
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
		 const notify = () => toast.error("Invaild Email");
  const [Data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(Data);

    setData({ name: '', email: '', message: '' });
  };

  return (
	<>
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={Data.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={Data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={Data.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" onClick={notify}>Submit</button>
      </form>
    </div>
	</>
  );
};

export default Contact;
