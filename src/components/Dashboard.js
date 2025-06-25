import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { logout } from '../Service/AuthorizationServices'; 
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  text-align: center; // Center the content
`;

const WelcomeMessage = styled.h2`
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  background-color:rgb(43, 104, 209); 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(80, 12, 157); 
  }
`;

function Dashboard() {
    const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };
  return (
    <DashboardContainer>
      <WelcomeMessage>Welcome, [User's Name]! 👋</WelcomeMessage>
      <p>  Your security is our priority. Monitor live feeds, review recordings, and <br>
      manage your surveillance system with ease. Stay alert, stay secure!</br></p>
      <p>This is a secure area for users to provide safety to their belongings and loved ones.</p>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton> 
      
    </DashboardContainer>
  );
}

export default Dashboard;