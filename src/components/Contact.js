import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 50px;
  background-image: url('/images/bgabout.jpg'); 
  background-size: cover;
  background-position: center;
  text-align: center;
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: Black;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 15px;
  color: Black;
`;

const SectionText = styled.p`
  font-size: 1.1em;
  color: white;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactDetail = styled.p`
  font-size: 1.1em;
  color: white;
`;

const Location = styled.div`
  margin-top: 40px;
`;

function Contact() {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>

      <Section>
        <SectionText>
          Have questions or need assistance? We're here to help!
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Get in Touch</SectionTitle>
        <SectionText>
          Feel free to reach out to us via email or phone. We value your feedback and are committed to providing you with the best possible experience.
        </SectionText>

        <ContactInfo>
          <ContactDetail>Email: support@guardeye.com</ContactDetail>
          <ContactDetail>Phone: +1 (555) 123-4567</ContactDetail>
        </ContactInfo>
      </Section>

      <Section>
        <SectionTitle>Stay Connected</SectionTitle>
        <SectionText>
          Stay up-to-date with the latest news, updates, and security tips by following us on social media. Connect with us on Facebook and Twitter to join our growing community.
        </SectionText>
      </Section>

      <Location>
        <SectionTitle>Location</SectionTitle>
        <SectionText>
          Dehradun, Uttarakhand, India
        </SectionText>
      </Location>
    </ContactContainer>
  );
}

export default Contact;