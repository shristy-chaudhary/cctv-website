import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../Service/AuthorizationServices';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 50px auto;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [notificationPreference, setNotificationPreference] = useState('email'); // Default to email
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const success = await register(username, email, contactNumber, password, notificationPreference);
      if (success) {
        navigate('/signin');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during registration.');
    }
  };

  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email or Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="tel"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Retype Password"
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
          required
        />
        <div>
        <div style={{ marginBottom: '15px' }}> 
        <p>Want to receive notifications on:</p> 
          <label>
            <input
              type="radio"
              value="email"
              checked={notificationPreference === 'email'}
              onChange={(e) => setNotificationPreference(e.target.value)}
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              value="sms"
              checked={notificationPreference === 'sms'}
              onChange={(e) => setNotificationPreference(e.target.value)}
            />
            SMS
          </label>
          </div>
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;