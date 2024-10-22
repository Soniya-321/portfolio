// src/components/Signup.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { useNavigate, Link } from 'react-router-dom';

import './index.css'

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { username, email, password } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!username || !email || !password) {
      setError('All fields are required');
      return false;
    }
    // Simple email regex
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return false;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    try {
      signup(username, email, password);
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
        <div className='signup-card'>
      <h2 className='signup-heading'>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
            <label className='input-label'>
            Username
            </label>
            <input className='input-box'
                type="text"
                name="username"
                value={username}
                onChange={handleChange} placeholder='Username'
                required
            />
        </div>
        <div className='input-container'>
        <label className='input-label'>
          Email
        </label>
        <input className='input-box'
            type="email"
            name="email"
            value={email}
            onChange={handleChange} placeholder='Email'
            required
          />
          </div>
        <div className='input-container'>
        <label className='input-label'>
          Password
        </label>
        <input className='input-box'
            type="password"
            name="password"
            value={password}
            onChange={handleChange} placeholder='Password'
            required
          />
    </div>
        <button type="submit" className='signup-btn'>Signup</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p className='acnt-details'>
        Already have an account? <Link to="/login" className='login-link'>Login Here</Link>
      </p>
      </div>
    </div>
  );
};

export default Signup;
