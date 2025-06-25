# CCTV Monitoring System

This project is a web-based CCTV monitoring system that allows users to register, log in, and view their security camera recordings. The application is built with a React frontend and a Node.js/Express backend, utilizing MongoDB for data storage.

## Features

* **User Authentication:** Secure user registration and login functionality using JWT (JSON Web Tokens).
* **Recording Management:**
    * Upload new security camera recordings (metadata and file paths).
    * View a list of recordings associated with the logged-in user.
* **MongoDB Integration:** Persistent storage of user data and recording metadata.
* **Responsive Design:** (If applicable, mention if your frontend is responsive)

## Technologies Used

**Frontend:**

* **React:** A JavaScript library for building user interfaces.
* **React Router DOM:** For declarative routing in React applications.
* **`fetch` API (or `axios`):** For making HTTP requests to the backend.
* **Styled Components (or other CSS-in-JS/CSS framework):** (Mention if you used any specific styling solution)

**Backend:**

* **Node.js:** A JavaScript runtime environment.
* **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
* **MongoDB:** A NoSQL database for storing user and recording data.
* **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
* **`bcryptjs`:** For hashing and comparing passwords securely.
* **`jsonwebtoken` (JWT):** For implementing token-based authentication.
* **`cors`:** Node.js middleware for enabling Cross-Origin Resource Sharing.
* **`body-parser`:** Node.js middleware for parsing incoming request bodies.

## Project Structure

├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js             # Main backend application file
├── my-cctv-app/              # Your React frontend project
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/       # React components (e.g., SignIn, Dashboard, Recordings)
│   │   ├── services/         # API and authentication service files (apiService.js, authService.js)
│   │   ├── App.js            # Main React application component
│   │   └── index.js          # React entry point
│   ├── package.json
│   └── ...other-frontend-file
----  Readme file


## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

* **Node.js & npm:**
    * Download and install from [nodejs.org](https://nodejs.org/).
    * Verify installation: `node -v` and `npm -v`
* **MongoDB:**
    * Download and install the Community Server from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
    * Ensure MongoDB is running. You can typically start it by running `mongod` in your terminal.
    * Create the default data directory:
        * **Windows:** `C:\data\db` (create these folders if they don't exist)
        * **macOS/Linux:** `/data/db` (create and ensure correct permissions: `sudo mkdir -p /data/db` and `sudo chown -R $(whoami) /data/db`)
* **MongoDB Compass (Optional but Recommended):** A GUI tool for interacting with your MongoDB database. Download from [mongodb.com/products/compass](https://www.mongodb.com/products/compass).

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Install backend dependencies:**
    ```bash
    npm install
    ```
3.  **Create your JWT Secret Key:**
    * **Crucial Security Step:** Generate a strong, random string to use as your JWT secret key. This should be at least 32 characters long and include a mix of uppercase, lowercase, numbers, and symbols.
    * **Example Generation (in Node.js console):**
        ```bash
        node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
        ```
    * **Set as Environment Variable:** **Do NOT hardcode this in `server.js` for production.** For local development, you can temporarily replace `'your-jwt-secret-key'` in `server.js` with the generated key. For better practice, use a `.env` file (install `dotenv` package: `npm install dotenv` and load it at the top of `server.js`).
        ```javascript
        // At the very top of server.js
        require('dotenv').config();
        // ...
        const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-fallback-secret-key';
        // ... then use JWT_SECRET_KEY in jwt.sign and jwt.verify
        ```
        And create a `.env` file in your `backend` directory:
        ```
        JWT_SECRET_KEY="your_generated_secure_key_here"
        ```
        Add `.env` to your `.gitignore`!

4.  **Run the backend server:**
    ```bash
    node server.js
    ```
    You should see "Server started on port 5000" (or your configured port). Keep this terminal window open.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../my-cctv-app
    ```
2.  **Install frontend dependencies:**
    ```bash
    npm install
    ```
3.  **Start the React development server:**
    ```bash
    npm start
    ```
    This will open your application in your default web browser (usually `http://localhost:3000`).

## Usage

1.  **Register a User:**
    * Go to the signup page (`/signup` or similar path in your app).
    * Fill in the details and register. The user data will be stored in your MongoDB `cctv` database.
2.  **Log In:**
    * Use the registered credentials to log in.
    * Upon successful login, a JWT will be stored in your browser's `localStorage`.
3.  **View/Upload Recordings:**
    * Navigate to the dashboard or recordings page.
    * If implemented, you can upload new recording metadata.
    * You should see recordings fetched from the MongoDB backend, associated with your logged-in user.
4.  **Explore with MongoDB Compass:**
    * Connect MongoDB Compass to `mongodb://localhost:27017/cctv`.
    * You can browse the `users` and `recordings` collections to see the data stored by your application.

## API Endpoints (Backend)

* `POST /api/signup`: Register a new user.
* `POST /api/signin`: Log in an existing user and receive a JWT.
* `GET /api/recordings`: Get all recordings for the authenticated user. (Requires JWT in `Authorization: Bearer <token>`)
* `POST /api/recordings`: Upload new recording metadata. (Requires JWT)

## Contributing

Feel free to fork this repository and submit pull requests.

## License

This project is open-source and available under the [MIT License](LICENSE). (Create a `LICENSE` file in your root directory if you want to specify a license)

---

**Note:** This README assumes a basic structure and functionality. You might need to adjust specific paths, component names, or API endpoint details based on your actual project implementation. Remember to create the `LICENSE` file if you mention it.
