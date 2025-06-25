// src/services/recordingService.js
export async function getRecordings() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            videoUrl: 'recordings/recording1.mp4', // Replace with your video file paths
            timestamp: '2025-03-05 12:27:00',
          },
          {
            videoUrl: 'recordings/recording2.mp4',
            timestamp: '2025-03-05 12:28:00',
          },
          // Add more recordings as needed
        ]);
      }, 500);
    });
  }