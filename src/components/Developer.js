import React from 'react';
import styled from 'styled-components';

const DeveloperContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-image: url('/images/bgabout.jpg'); 
  background-size: cover;
  background-position: center;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333; 
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #fff; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

const DetailBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 200px;
  text-align: center;
`;

const DetailTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: black;
`;

const DetailText = styled.p`
  font-size: 1em;
  color: grey;
`;

function Developer() {
  return (
    <DeveloperContainer>
      <Title>Developer</Title>
      <DetailsContainer>
        <DetailBox>
          <DetailTitle>University Roll</DetailTitle>
          <DetailText>2019498</DetailText>
        </DetailBox>
        <DetailBox>
          <DetailTitle>Name</DetailTitle>
          <DetailText>Shristy Chaudhary</DetailText>
          <DetailText>Btech-AI & ML</DetailText>
          <DetailText>AI & ML-28</DetailText>
        </DetailBox>
        <DetailBox>
          <DetailTitle>Contact</DetailTitle>
          <DetailText>9457018918</DetailText>
        </DetailBox>
      </DetailsContainer>
    </DeveloperContainer>
  );
}

export default Developer;