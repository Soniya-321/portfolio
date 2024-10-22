// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Portfolio from './components/Portfolio';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
