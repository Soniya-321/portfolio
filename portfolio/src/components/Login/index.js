// src/components/Login.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { useNavigate, Link } from 'react-router-dom';

import './index.css'

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!email || !password) {
      setError('All fields are required');
      return false;
    }
    // Simple email regex
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    try {
      login(email, password);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className='signup-card'>
      <h2 className='signup-heading'>Login</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className='signup-btn'>Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p className='acnt-details'>
        Don't have an account? <Link to="/signup" className='login-link'>Signup Here</Link>
      </p>
      </div>
    </div>
  );
};

export default Login;
