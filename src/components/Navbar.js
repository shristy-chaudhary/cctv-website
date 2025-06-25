import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, isAuthenticated } from '../Service/AuthorizationServices';

function Navbar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
      logout();
      onLogout();
      navigate('/signin');
  };

  const handleRecordingsClick = (e) => {
      if (!isAuthenticated()) {
          e.preventDefault();
          navigate('/signin');
      }
  };

  return (
      <nav style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '10px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          width: '100%'
      }}>
          <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 20px'
          }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize:50 }}>
                  GUARD EYE
              </Link>
              <div>
                  {isLoggedIn ? (
                      <button onClick={handleLogout} style={{
                          background: 'none',
                          border: 'none',
                          color: 'white',
                          cursor: 'pointer',
                          marginLeft: '20px',
                          transition: 'color 0.3s ease'
                      }}>
                          Logout
                      </button>
                  ) : (
                      <>
                          <Link to="/signin" style={{
                              color: 'white',
                              textDecoration: 'none',
                              marginLeft: '20px',
                              transition: 'color 0.3s ease',
                              marginRight: '20px'
                          }}>Sign In</Link>
                          <Link to="/signup" style={{
                              color: 'white',
                              textDecoration: 'none',
                              marginLeft: '20px',
                              transition: 'color 0.3s ease',
                              marginRight: '20px'
                          }}>Sign Up</Link>
                      </>
                  )}
              </div>
          </div>
          <div style={{
              display: 'flex',
              justifyContent: 'left',
              backgroundColor: '#34495e',
              padding: '10px 0',
              width: '100%'
          }}>
              <Link to="/" style={{
                  color: 'white',
                  textDecoration: 'none',
                  margin: '0 15px',
                  transition: 'color 0.3s ease'
              }}>HOME</Link>
              <Link to="/recordings" onClick={handleRecordingsClick} style={{
                  color: 'white',
                  textDecoration: 'none',
                  margin: '0 15px',
                  transition: 'color 0.3s ease'
              }}>RECORDINGS</Link>
              <Link to="/Blog" style={{
                  color: 'white',
                  textDecoration: 'none',
                  margin: '0 15px',
                  transition: 'color 0.3s ease'
              }}>BLOG</Link>
              <Link to="/developer" style={{
                  color: 'white',
                  textDecoration: 'none',
                  margin: '0 15px',
                  transition: 'color 0.3s ease'
              }}>DEVELOPER</Link>
              <Link to="/About" style={{
                  color: 'white',
                  textDecoration: 'none',
                  margin: '0 15px',
                  transition: 'color 0.3s ease'
              }}>ABOUT US</Link>
              <Link to="/contact" style={{
                  color: 'white',
                  textDecoration: 'none',
                  margin: '0 15px',
                  transition: 'color 0.3s ease'
              }}>CONTACT US</Link>
          </div>
      </nav>
  );
}

export default Navbar;