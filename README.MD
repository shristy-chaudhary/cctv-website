CCTV Monitoring Website
Overview
This project is a full-stack web application designed for CCTV (Closed-Circuit Television) monitoring. It allows users to register, log in, and manage their video recordings. The frontend is built with React.js, providing a dynamic and responsive user interface, while the backend is powered by Node.js with Express.js, storing user information and recording metadata in a MongoDB database.

Features
User Authentication:
User Registration: Securely register new user accounts.
User Login: Log in with existing credentials.
JWT-based Authentication: Secure API endpoints using JSON Web Tokens.
Recording Management:
Upload Recordings: (Future: Mechanism to upload video files or links).
View Recordings: Display a list of recordings associated with the logged-in user.
Recording Metadata Storage: Store information about recordings (e.g., path, timestamp, associated user).
Database Integration:
MongoDB: NoSQL database used for storing user accounts and recording metadata.
Mongoose: ODM (Object Data Modeling) library for MongoDB in the Node.js backend.
Responsive Design: (Assuming your React frontend is responsive) A user-friendly interface that adapts to various screen sizes.
Technologies Used
Frontend
React.js: JavaScript library for building user interfaces.
React Router DOM: For declarative routing in React applications.
Styled Components: (If you are using it based on earlier code snippets) For styling React components with CSS-in-JS.
Fetch API (or Axios): For making HTTP requests to the backend.
Backend
Node.js: JavaScript runtime environment.
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
MongoDB: NoSQL database for data storage.
Mongoose: MongoDB object data modeling for Node.js.
bcryptjs: For hashing and salting passwords to ensure secure storage.
jsonwebtoken (JWT): For implementing token-based authentication.
CORS: Middleware for enabling Cross-Origin Resource Sharing.
body-parser: Middleware to parse incoming request bodies.
Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js (LTS version recommended)
npm (comes with Node.js)
MongoDB Community Server
MongoDB Compass (Optional, but highly recommended for database management)
Getting Started
Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

1. Clone the Repository
Bash

git clone <your-repository-url>
cd <your-repository-name>
2. Backend Setup
Navigate into the backend directory:

Bash

cd backend
Install the backend dependencies:

Bash

npm install
MongoDB Setup:

Ensure your MongoDB server is running. If not, open your command prompt (as administrator) and start it:

Bash

# Navigate to your MongoDB bin directory, e.g.,
cd "C:\Program Files\MongoDB\Server\<Your_MongoDB_Version>\bin"
mongod
(Keep this command prompt window open as long as you want the database server to run.)

The backend will attempt to connect to mongodb://localhost:27017/cctv. The cctv database will be automatically created upon the first data insertion (e.g., a user signup). You can also verify this connection and see the database in MongoDB Compass.

Environment Variables:

You need to set a JWT secret key. Do not hardcode this in production.

Create a .env file in your backend directory (if you plan to use dotenv for environment variables, you'd need to install npm install dotenv and require('dotenv').config(); at the top of server.js). For simplicity in this local setup, you will directly replace the placeholder in server.js.

Open backend/server.js and replace 'your-jwt-secret-key' with a strong, random string (e.g., generated from RandomKeygen).

JavaScript

// Example in server.js
const token = jwt.sign({ id: user._id }, 'YOUR_VERY_STRONG_AND_SECRET_KEY_HERE');
// ...
const decoded = jwt.verify(token, 'YOUR_VERY_STRONG_AND_SECRET_KEY_HERE');
Start the Backend Server:

Bash

node server.js
# Or if you named it index.js
# node index.js
The server will start on http://localhost:5000.

3. Frontend Setup
Open a new terminal window and navigate into your React project directory:

Bash

cd ../my-cctv-app # Adjust this path if your frontend is not in 'my-cctv-app'
Install the frontend dependencies:

Bash

npm install
Start the Frontend Development Server:

Bash

npm start
This will open your application in your browser at http://localhost:3000 (or another available port).

Project Structure (Assumed)
.
├── backend/
│   ├── node_modules/
│   ├── server.js               # Main backend application file (Express app, MongoDB connection, API endpoints)
│   ├── package.json
│   └── ...
├── my-cctv-app/               # Your React project root
│   ├── public/
│   ├── src/
│   │   ├── components/         # React components (SignIn, SignUp, Dashboard, Recordings, etc.)
│   │   ├── services/           # API and authentication services
│   │   │   ├── apiService.js   # Functions for interacting with backend APIs
│   │   │   └── authService.js  # Functions for authentication logic (e.g., isAuthenticated)
│   │   ├── App.js              # Main App component with routing
│   │   ├── index.js
│   │   └── ...
│   ├── node_modules/
│   ├── package.json
│   └── ...
└── README.md
Usage
Register: Navigate to the /signup route (or your registration page) and create a new user account.
Log In: Go to the /signin route (or your login page) and log in with your registered credentials.
Access Dashboard: Upon successful login, you will be redirected to the dashboard, where you can view and (eventually) upload recordings.
Future Enhancements
Actual Video Streaming/Storage: Integrate with cloud storage solutions (e.g., AWS S3, Google Cloud Storage) for storing actual video files and implementing video playback.
Live Stream Integration: Connect to actual CCTV camera feeds for live viewing.
User Roles/Permissions: Implement different user roles (e.g., admin, regular user).
Improved UI/UX: Enhance the user interface and user experience.
Real-time Notifications: Add real-time alerts for motion detection or other events.
Advanced Analytics: Implement features for analyzing recording data.
Dockerization: Containerize the application for easier deployment.
