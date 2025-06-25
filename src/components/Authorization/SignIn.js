import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Service/AuthorizationServices';
import styled from 'styled-components';

let users = JSON.parse(localStorage.getItem('users')) || [];
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 100px auto;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;


export async function register(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const existingUser = users.find((u) => u.email === email);
      if (existingUser) {
        resolve(false); // User already exists
      } else {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        resolve(true);
      }
    }, 500);
  });
}

export function logout() {
  isLoggedIn = false;
  localStorage.setItem('isLoggedIn', 'false');
}

export function isAuthenticated() {
  return isLoggedIn;
}


function SignIn({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {success} = await login(email, password);
    if (success) {
      onLogin();
      navigate('/recordings');
    } else {
      alert('Invalid credentials');
    }
  };
  
  // eslint-disable-next-line
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      onLogin();
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');  
    }
  };


  
  return (
    <SignInContainer>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Sign In</Button>
      </form>
    </SignInContainer>
  );
}




export default SignIn;