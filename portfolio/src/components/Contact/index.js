// src/components/sections/Contact.js
import React, { useState } from 'react';
import { MdCreate } from "react-icons/md";
import './index.css'

const Contact = () => {
  const initialFormState = { name: '', email: '', message: '' };
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setStatus('All fields are required.');
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setStatus('Invalid email format.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('');

    if (!validateForm()) return;

    // Simulate sending message
    console.log('Message sent:', form);
    setStatus('Message sent successfully!');
    setForm(initialFormState);
    
  };

  return (
    <div id="contact" className="contact-section">
      <h2 className='heading' style={{margin: 20}}>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className='email-heading'>Email Me <MdCreate className='email-note'/></h2>
        <input className='contact-input-box'
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
          <input className='contact-input-box'
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
          <textarea className='contact-input-box'
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          ></textarea>
        <button type="submit" className='contact-submit-btn'>Send Message</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
