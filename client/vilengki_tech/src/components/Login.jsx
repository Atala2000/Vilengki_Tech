import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/css/Login.css';

const Login = ({ setRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [county, setCounty] = useState('');
  const [error, setError] = useState('');
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5600/api/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Failed to login');
      }
      const result = await response.json();
      const role = result.role;
      setRole(role);
      navigate(role === 'admin' ? '/admin' : '/customer');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5600/api/SignUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullname, phone, county }),
      });
      if (!response.ok) {
        throw new Error('Failed to signup');
      }
      const result = await response.json();
      const role = result.role;
      setRole(role);
      console.log(role);
      navigate(role === 'admin' ? '/admin' : '/customer');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id='auth'>
      <h1>{signup ? 'Sign Up' : 'Login'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {signup && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={fullname}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="County"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />
        </>
      )}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signup ? handleSignup : handleLogin}>
        {signup ? 'Sign Up' : 'Login'}
      </button>
      <p onClick={() => setSignup(!signup)} style={{ cursor: 'pointer', color: 'blue' }}>
        {signup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
};

Login.propTypes = {
  setRole: PropTypes.func.isRequired,
};

export default Login;
