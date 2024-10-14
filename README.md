# E-Commerce Website for Clothing

## Overview

This project is a responsive **E-Commerce website** designed for selling **women's, men's, and children's clothing**. It is built using the **MERN stack** (MongoDB, Express, React, and Node.js) and offers a user-friendly shopping experience with features for both customers and administrators.

## Features

- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Dynamic User Interface**: Built with **React** for real-time updates and smooth navigation.
- **Admin Panel**: Developed with **Vite** for a fast and efficient development experience. The panel allows administrators to manage products, users, and inventory.
- **Secure User Authentication**: Implements login and signup functionality using **JWT (JSON Web Token)**.
- **Cart & Checkout**: Users can add items to their cart, proceed to checkout, and complete orders.
- **RESTful API**: Backend built with **Node.js** and **Express**, ensuring efficient, scalable operations.
- **MongoDB Atlas**: Secure and scalable data management via **MongoDB Atlas**.

## Tech Stack

- **Front-End**: [React](https://reactjs.org/) for a dynamic user interface.
- **Back-End**: [Node.js](https://nodejs.org/) for server-side operations.
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for secure and scalable data management.
- **Admin Panel**: [Vite](https://vitejs.dev/) for fast, optimized development.

## Technologies Used

- **Front-End**: React, React Router, HTML5, CSS, JavaScript
- **Back-End**: Node.js, Express.js
- **Admin Panel**: Vite, React
- **Database**: MongoDB (MongoDB Atlas)
- **State Management**: Redux
- **Authentication**: JWT (JSON Web Token)
- **Styling**: CSS

## Prerequisites

To run the project locally, you will need the following installed on your system:

- **Node.js**: [Download here](https://nodejs.org/)
- **npm** (Node Package Manager)
- **React** (install via `npm install react`)
- **Vite** (install via `npm install vite`)
- **MongoDB Atlas** account (for database setup)

## Database Setup

Follow these steps to set up your MongoDB database:

1. **Create a MongoDB Account**:
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

2. **Create a New Cluster**:
   - Select **"Build a Cluster"** and choose the free tier (M0) to get started.

3. **Create a Database User**:
   - In **Database Access**, click **"Add New Database User"**.
   - Set a username and password, and save the credentials for future use.

4. **Set Network Access**:
   - In **Network Access**, allow access from your current IP address or all IP addresses (`0.0.0.0/0`) for testing.

5. **Get Your Connection String**:
   - In the **Clusters** section, click **"Connect"** and choose **"Connect your application"**.
   - Copy the provided connection string and replace `<username>`, `<password>`, and `<dbname>` in your `index.js`.

## Installation

To install and run the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. **Front-End**:
  ```bash
  cd frontend
  npm start
  ```

3. **Back-End**:
  ```bash
  cd backend
  node index.js
  ```

4. **Admin Panel**:
  ```bash
  cd admin
  npm run dev
  ```

## Contributing

If you would like to contribute to the project, feel free to submit a pull request or reach out to discuss potential improvements. Please follow the standard GitHub fork, branch, and pull request workflow.


## Screenshots 
**Home Page**
![image](https://github.com/user-attachments/assets/26e0da0f-33cb-4f6e-8471-b16fce600b34)
![image](https://github.com/user-attachments/assets/ee4dcca0-e89b-4bf2-b34c-5d0e15368ee8)
![image](https://github.com/user-attachments/assets/fd1f5e64-21e2-4632-87eb-5b61c0e5c3a7)
![image](https://github.com/user-attachments/assets/2a70275c-da94-4b82-8a5b-12a905bf793c)

**Mens Page**
![image](https://github.com/user-attachments/assets/94ddb56d-c805-4bee-b378-774dd265a0b2)

**Kids Page**
![image](https://github.com/user-attachments/assets/972d23d5-7001-40a9-b512-ff9b78fe7a41)

**Womens Page**
![image](https://github.com/user-attachments/assets/78f2132a-5b8c-42d7-8e13-c4c2460b79e5)

**Cart Page**
![image](https://github.com/user-attachments/assets/896e70f8-7b82-46c2-90e8-9cf0dc4d430a)
![image](https://github.com/user-attachments/assets/0c68a9e5-4116-4567-8e23-433e30f95044)



