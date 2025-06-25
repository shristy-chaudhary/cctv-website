import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px); // Adjust height based on Navbar height
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
`;

function Home() {
  return (
    <HomeContainer className = "home-container">
    <Title className = "home-container h1">Welcome to GUARD EYE</Title>
    <Subtitle className = "home-container p">The Trusted Place To Keep your property safe and secure</Subtitle>
    </HomeContainer>
  )
}

export default Home;