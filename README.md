

# NINE TILES

A simple social media application that allows the user to create an account, log in, post images with descriptions, comment on and like posts, and follow other users.

## Table of Contents

- [Project Description](#project-description)
    - [The Challenge](#the-challenge)
- [Setup and Running Instructions](#setup-and-running-instructions)
    - [Prerequisites](#prerequisites)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
- [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
    - [Useful Resources](#useful-resources)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)

## Project Description

Nine Tiles is a simple yet engaging social app where users can showcase their identity through a grid of 9 images. Users must carefully choose which images to display, as they have to replace an existing image if they want to add a new one once all tiles are filled. This unique constraint encourages thoughtful curation of their grid. The app includes basic user authentication (login and registration) using MySQL.  The application is built using React in the Vite environment and styled with Tailwind CSS. It also includes simple login and registration support using MySQL.

Nine tiles is a simple social app where the user expresses themselves through images added to their wall. Eventually, these images will be arranged in a 3 by 3 grid creating a mosaic of nine tiles that express the user (this feature is currently being implemented). The collage will only show the 9 most recently added images.

### The Challenge

Users should be able to:

- Easily create an account and then log in
- Navigate through the user-friendly interface to easily find the features that interest them
- Add/edit their profile picture and name
- Add, comment on and like their own and the tiles of the users they follow.
- easily switch their interface to dark mode

## Setup and Running Instructions

To set up and run this project locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine, and please note that this project contains backend components and uses MySQL databases. To fully use the application's functionality, you need to create a MySQL database and import the provided SQL script. You can download runtime enviroment from [Node.js](https://nodejs.org) and database from [MySQL](https://dev.mysql.com/downloads/mysql/)

### Frontend Setup

1. **Clone the repository**:

   ```bash
   git clone uxui-course-final-project-6Mario13
   cd uxui-course-final-project-6Mario13
   ```

2. **Install NPM packages**:

   ```bash
   npm install
   ```

3. **Running the Frontend**:

   Start the development server:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to:

   [http://localhost:5173/](http://localhost:5173/)

###  Backend Setup

1. **Log in to MySQL**:

Open terminal and log in to MySQL

   ```bash
   mysql -u username -p
   ```

Replace username with your MySQL user. You will be prompted for a password when you run the command.

2. **New database**:

Create a new database (if you don't already have one)

    ```sql
   CREATE DATABASE social;
   ```

3. **Execute the script**:

Execute the `socialSchema.sql` script to import the schema into the newly created database:

   ```bash
   mysql -u username -p social  < ../uxui-course-final-project-6Mario13/api/socialSchema.sql
   ```

4. **Navigate to the backend directory**:

Change directory to API

    ```bash
    cd  api
    ```

5. **Configure Database Connection**

To ensure that the application can connect to your MySQL database, you need to update the `connect.js` file in `src` folder with your own database credentials.

    ```javascript
    import mysql from "mysql";

    export const db = mysql.createConnection({
    host: "localhost",
    user: "your-mysql-username",
    password: "your-mysql-password",
    database: "social"
    });
    ```

Replace the placeholders (`your-mysql-username`, `your-mysql-password`, etc.) with your actual MySQL credentials

    - host: Typically localhost if running MySQL locally.
    - user: Your MySQL username.
    - password: Your MySQL password.
    - database: The name of the database you created earlier (e.g., social).

5. **Running the Backend**:

Start the backend server:

   ```bash
   npm start
   ```

## My Process

I am currently building this project as part of my UX/UI engineering course. This project is illustrative and I wanted to include the knowledge I gained during the course. I also wanted to include backend elements in the application, which was a big personal challenge because backend was not the subject of the course and it was based on self-learning.

### Built With

- React
- Vite 
- Tailwind CSS
- Node.js
- Custom backend APIs
- React Hooks
- React Query
- Context API
- MySQL database

### What I Learned

This project provides a comprehensive experience in building a modern web application. I am learning to build responsive design, how to use React Hooks and implement simple backends elements.

### Continued Development

As I continue to develop this project, I aim to:

- Improve interface and and overall look of the app.
- add extra features to improve the user experience

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MySQL Documentation](https://dev.mysql.com/doc/mysql-getting-started/en/)
- [Tailwind Documentation](https://tailwindcss.com/docs/installation)
- [Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Lama Dev](https://www.youtube.com/@LamaDev)

## Project Structure

Here is a brief explanation of the project's structure:

- public/: Contains static files such as the Logo.svg.
- src/components/: Contains React components used throughout the project.
- src/screens/: Contains page components for different routes in the application.
- src/App.jsx: The main application component.
- src/index.css: The main CSS file, styled with Tailwind CSS.
- src/main.jsx: The entry point of the React application.
- api/: Contains server-side code, including database configuration and API routes.
- tailwind.config.js: Configuration file for Tailwind CSS.
- package.json: Lists project dependencies and scripts.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue.

## Contact
For any inquiries or feedback, please contact:

Mariusz Markowicz
Email: markowicz1@gmail.com
GitHub: 6Mario13

Thank you for checking out Nine Tiles!