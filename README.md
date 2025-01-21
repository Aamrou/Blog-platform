# Blog-platform
Webstack - Portfolio Project
* Overview

The Blog Platform is a web application designed to allow users to create, view, edit, and delete blog posts. Built with modern technologies, this platform enables seamless user interaction and a robust backend for managing data efficiently.

* Tech Stack

Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB
API Communication: Axios

* Features

User Management:

User registration and login (with secure password hashing)

Authentication using JSON Web Tokens (JWT)

Persistent user sessions

Blog Management

Create, edit, update, and delete blog posts

View all posts or filter posts by categories

Add and display comments for each blog post

Categorization for organizing blog posts

Additional Features

Responsive design for mobile and desktop

Secure backend with input validation and error handling.

Project Structure

Backend

The backend is built using Node.js and Express.js, with MongoDB as the database. Mongoose is used to define schemas and models.

Key Directories

/models: Contains Mongoose models for User, Post, Comment, and Category.

/routes: Contains Express route handlers for users, posts, comments, and categories.

/controllers: Business logic for handling requests.

Example Endpoints

User Authentication

POST /api/users/register: Register a new user

POST /api/users/login: Authenticate and login

Blog Posts

GET /api/posts: Retrieve all blog posts

POST /api/posts: Create a new post

PUT /api/posts/:id: Update a blog post

DELETE /api/posts/:id: Delete a blog post

Frontend

The frontend is built using React with React Router for navigation.

Key Components

Home: Displays a list of all blog posts

PostDetail: Shows details of a specific blog post, including comments

Login: User login page

Dashboard: Allows users to manage their blog posts

API Communication

Axios is used to handle API requests. API calls are abstracted into a services/api.js file.

* Getting Started

Prerequisites

Node.js (v16+)

MongoDB 

Installation

1 - Clone the repository:
git clone https://github.com/Aamrou/Blog-platform.git
cd Blog-platform

2 - Install dependencies for the backend:
cd backend
npm install

3 - Install dependencies for the frontend:
cd frontend
npm install

4 - Configure environment variables: Create a .env file in the backend directory with the following:
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PORT=5000

* Running the Application

1 - Start the backend server:
cd backend
npm run dev

2 - Start the frontend server:
cd frontend
npm start

3 - Open your browser and navigate to http://localhost:3000

* Deployment

Backend

Deploy to Heroku, AWS, or any other Node.js hosting platform.

Ensure environment variables are configured in the hosting provider.

Frontend

Deploy to Netlify, Vercel, or any static hosting provider.

Database

Use MongoDB Atlas for cloud-based database management.

* Future Enhancements

Add role-based access control (e.g., admin vs user permissions)

Implement a rich-text editor for blog posts

Enable image uploads for posts

Add analytics to track user interactions .

* License

This project is licensed under the MIT License. See the LICENSE file for more details.

* Contact

For questions or feedback, please contact
darhmaouiaamr@gmail.com



