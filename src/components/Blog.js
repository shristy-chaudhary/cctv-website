import React from "react";
import styled from "styled-components";


const BlogContainer = styled.div`
  padding: 50px;
  text-align: left;
  background-image: url('/images/bgabout.jpg'); 
  background-size: cover;
  background-position: center;
  color: white; 
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 15px;
`;

const SectionText = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const Copyright = styled.p`
  font-size: 0.9em;
  margin-top: 50px;
  text-align: center;
`;

function Blog() {
  return (
    <BlogContainer>
      <Title>Building a Smart Security System with AI and Machine Learning</Title>

      <SectionText>
        In an increasingly interconnected world, the need for robust and
        intelligent security solutions is paramount. With the advancements in AI
        and machine learning, we embarked on a journey to develop GuardEye, a
        smart security system that offers proactive protection. Leveraging
        cutting-edge technologies, we created a user-friendly platform that can
        help users safeguard their premises and assets effectively.
      </SectionText>

      <SectionTitle>The Problem</SectionTitle>
      <SectionText>
        The project began with recognizing a common challenge: traditional
        security systems often rely on reactive measures. We aimed to develop a
        system that could proactively detect and prevent security threats. Our
        goal was to create an intelligent solution that could provide
        real-time monitoring, threat detection, and actionable insights.
      </SectionText>
      <SectionTitle>The Solution</SectionTitle>
      <SectionText>
        We developed GuardEye, a smart security system that leverages AI and machine learning to provide proactive security. The system analyzes real-time data from cameras,
        sensors, and other security devices to detect anomalies and potential threats. Here's how it works:
        <ol>
          <li>Real-Time Monitoring: GuardEye continuously monitors your premises using a network of cameras and sensors.</li>
          <li>AI-Powered Threat Detection: Our system uses machine learning models to analyze video feeds and sensor data, detecting suspicious activities and potential threats.</li>
          <li>Alerts and Notifications: When a threat is detected, GuardEye sends instant alerts and notifications to your mobile device or control center.</li>
          <li>Actionable Insights: GuardEye provides detailed reports and insights about security events, helping you understand and improve your security posture.</li>
        </ol>
      </SectionText>

      <SectionTitle>Key Features</SectionTitle>
      <SectionText>
        <ul>
          <li>Real-Time Monitoring: Continuous monitoring of your premises with cameras and sensors.</li>
          <li>AI-Driven Threat Detection: Advanced AI algorithms detect suspicious activities and potential threats.</li>
          <li>Instant Alerts: Immediate notifications on your device or control center when a threat is detected.</li>
          <li>Detailed Reports: Comprehensive reports and insights to enhance your security awareness.</li>
          <li>User-Friendly Interface: An intuitive interface for easy management and control of your security system.</li>
        </ul>
      </SectionText>

      <SectionTitle>Conclusion</SectionTitle>
      <SectionText>
        GuardEye brings the power of AI and machine learning to the realm of security, offering a proactive and intelligent solution for safeguarding your premises. It serves as a
        valuable tool for individuals and businesses looking to enhance their security posture. By combining technology and security expertise, we aim to make security more
        accessible and effective. In an era where security threats are becoming increasingly sophisticated, GuardEye represents a significant step forward in providing reliable
        and intelligent security solutions. We hope that this project will contribute to a safer and more secure environment for everyone.
      </SectionText>

     <Copyright>
        &copy; {new Date().getFullYear()} GuardEye. All rights reserved.
      </Copyright>
    </BlogContainer>
  );
}

export default Blog;