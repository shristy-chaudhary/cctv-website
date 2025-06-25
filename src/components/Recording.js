import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getRecordings } from '../Service/RecordingService';
import styled from 'styled-components';

const RecordingsContainer = styled.div`
  padding: 20px;
`;

const RecordingItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

function Recordings() {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    async function fetchRecordings() {
      const data = await getRecordings();
      setRecordings(data);
    }
    fetchRecordings();
  }, []);

  return (
    <RecordingsContainer className = "recordings-container">
      <h2>Your Recordings</h2>
      {recordings.map((recording, index) => (
        <RecordingItem className = "recording-item" key={index}>
          <ReactPlayer url={recording.videoUrl} controls width="100%" height="auto" />
          <p>{recording.timestamp}</p>
        </RecordingItem>
      ))}
    </RecordingsContainer>
  );
}

export default Recordings;