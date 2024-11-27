# User Authentication and Authorization using Token

This project implements user authentication and authorization using Bearer tokens in a Node.js application with Express.js, Mongoose, and JWT. The application is structured with the MVC pattern and includes API documentation in Postman.



## Render Deployment URL 
[Render Deployment](https://userauthenticationapp-ccp1.onrender.com/api/v1//home)

Use the sample login :



## Postman Documentation URL
[Postman Documentation URL:  )

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)


## Features
- **User Registration**: Register new users with hashed passwords.
- **User Login**: Authenticate users and issue JWTs for authorized access.
- **JWT-Based Authorization**: Protect routes using Bearer tokens.
- **Secure User Info Retrieval**: Users can retrieve their information using valid tokens.
- **Error Handling and Validation**: Proper error messages and input validations.
- **API Documentation**: Detailed documentation using Postman, with sample requests and responses.

## Tech Stack
- **Node.js**: JavaScript runtime for server-side applications.
- **Express.js**: Minimalist web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: JSON Web Token for secure token-based authentication.
- **Postman**: API testing and documentation.

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone 
   cd yourrepository

2. Install dependencies:

    ```bash 
    npm install express
    npm install bcrypt
    npm install nodemon --save-dev
    npm install cookie-parser
    npm install dotenv
    npm install jsonwebtoken 
    npm install mongoose

3. Setting up environment variables .
4. Run the Application
    ```bash
    npm run dev   // In VS Code
    npm start     // In Server Deployment

## Environment Variables

Both of these values were put under .gitignore concerning security.

- **MongoDB Database URL** - The URL for the database stored in Atlas
- **Secret Key** - Which is used in hashing the token in token encryption and decryption phase. 



## Folder Structure

.

├── controllers      # Contains controller functions

├── models           # Contains Mongoose models

├── routes           # Defines routes for the application

├── utils            # Middleware for JWT token verification

├── db.js         # Basefile (e.g., database connection)

└── README.md        # Project documentation

## API Endpoints

//  
route.post("/register", logincontroller.register)
route.get("/admin", logincontroller.admin)
route.post("/login", logincontroller.login)
route.post("/logout", logincontroller.logout)


route.get("/me" ,  auth.authverify, logincontroller.me)
module.exports = route; 






## Deployment

The application can be deployed to Render for public access.

1. Pushed the code to GitHub.
2. Deployed the application by connecting our GitHub repository to Render.
3. Use the [Render URL]() to access your deployed API.


