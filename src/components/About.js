import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-image: url('/images/bgabout.jpg');
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: white;
  margin-bottom: 40px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: rgb(11, 95, 150);
`;

const SectionText = styled.p`
  font-size: 1.1em;
  color: white;
  line-height: 1.6;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
`;

const GetStartedButton = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background-color:rgb(48, 143, 206);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Copyright = styled.p`
  font-size: 0.9em;
  color: #666;
  margin-top: 50px;
`;

function About() {
  return (
    <AboutContainer>
      <Title>GUARD EYE: Security System you need for your safety</Title>
      <Subtitle>Empowering you with technology and insights for a safer environment.</Subtitle>

      <Section>
        <SectionTitle>About Us</SectionTitle>
        <SectionText>
        Welcome to GuardEye, where cutting-edge technology meets robust security for a safer world.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Our Vision</SectionTitle>
        <SectionText>
        We envision a world where security is not a privilege, but a fundamental right accessible to all. 
        Our journey began with a simple yet powerful idea: to empower individuals and communities with the technology 
        and insights they need to safeguard their well-being.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <SectionText>
        At GuardEye, our mission is to provide you with a seamless and intuitive platform that leverages the power of 
        artificial intelligence and machine learning. We want to assist you in proactively identifying potential security 
        threats and responding to them effectively, all while offering comprehensive tools and insights to enhance your safety awareness.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>How We Do It</SectionTitle>
        <SectionText>
        Our platform utilizes a robust machine learning model trained on a vast dataset of security events and patterns. 
        By analyzing real-time data from your security system, our system detects anomalies, predicts potential threats, 
        and provides actionable insights, allowing you to take proactive measures to enhance your safety.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Your Well-being, Our Priority</SectionTitle>
        <SectionText>
        Your safety is our top priority. We understand that navigating the complexities of security can be daunting. 
        That's why we've gone the extra mile to provide not only cutting-edge threat detection but also comprehensive 
        tools and resources to enhance your security posture. You'll find detailed security reports, actionable insights, 
        and expert guidance to help you stay ahead of potential threats.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Join Us on this Journey</SectionTitle>
        <SectionText>
        We invite you to explore our platform, utilize our advanced tools, and take control of your security. 
        Together, we can redefine safety and create a more secure world for everyone. Thank you for choosing GuardEye as
        your trusted security partner. We are here to empower you with technology, insights, and unwavering support for a safer future.
        </SectionText>
      </Section>

      <GetStartedButton to="/">Get Started</GetStartedButton>
      <Copyright>
        &copy; {new Date().getFullYear()} GuardEye. All rights reserved.
      </Copyright>
    </AboutContainer>
  );
}

export default About;