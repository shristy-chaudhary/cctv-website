import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './components/Authorization/SignIn';
import SignUp from './components/Authorization/SignUp';
import Recordings from './components/Recording';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact'; 
import Developer from './components/Developer';
import { isAuthenticated } from './Service/AuthorizationServices';
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex; 
  flex-direction: column;
`;

const ContentContainer = styled.div`
  min-height: calc(100vh - 60px);
  width: 100%; 
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await isAuthenticated();
      setIsLoggedIn(authStatus.isAuthenticated);
    };
    checkAuth();
  }, []);

  return (
      <Router>
        <AppContainer>
          <Navbar isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
          <ContentContainer className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={isLoggedIn ? <Navigate to="/recordings" /> : <SignIn onLogin={() => setIsLoggedIn(true)} />} />
              <Route path="/signup" element={isLoggedIn ? <Navigate to="/recordings" /> : <SignUp />} />
              <Route path="/recordings" element={isLoggedIn ? <Recordings /> : <Navigate to="/signin" />} />
              <Route path="/Dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/signin" />} />
              <Route path="/About" element={<About />} /> 
              <Route path="/Blog" element={<Blog />} />
              <Route path='/Contact' element={<Contact />} /> 
              <Route path="/Developer" element={<Developer />} /> 
            </Routes>
          </ContentContainer>
        </AppContainer>
      </Router>
  );
}

export default App;