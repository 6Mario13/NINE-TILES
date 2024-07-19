
# NINE TILES

Welcome to Nine Tiles! This social app allows users to express themselves using 9 images in a 3 by 3 arrangement. Users can update their tiles by replacing existing photos with new ones. The application is built using React in the Vite environment and styled with Tailwind CSS. It also includes simple login and registration support using MySQL.

## Table of Contents

- [Project Description](#project-description)
- [Setup and Running Instructions](#setup-and-running-instructions)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Additional Information](#additional-information)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Description

Nine Tiles is a simple yet engaging social app where users can showcase their identity through a grid of 9 images. Users must carefully choose which images to display, as they have to replace an existing image if they want to add a new one once all tiles are filled. This unique constraint encourages thoughtful curation of their grid. The app includes basic user authentication (login and registration) using MySQL.

## Setup and Running Instructions

To set up and run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/BEAM-UXUI-0124/uxui-course-final-project-6Mario13
    cd uxui-course-final-project-6Mario13
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up the MySQL database:**
    - Create a MySQL database and import the provided SQL script to set up the necessary tables.
    - Update the database configuration in your project files (e.g., `server/config/db.js`) with your MySQL credentials.

4. **Run the development server:**
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173/` to view the application.

## Dependencies

This project relies on the following major dependencies:

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **MySQL:** A relational database management system for user authentication.

To install all dependencies, run:
```bash
npm install
```

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


## Additional Information

- IDE Used: The project was developed using Visual Studio Code.
- Images: Users upload images to create their 3 by 3 grid.(this feature is not ready yet)

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact
For any inquiries or feedback, please contact:

Mariusz Markowicz
Email: markowicz1@gmail.com
GitHub: 6Mario13

Thank you for checking out Nine Tiles! We hope you enjoy expressing yourself through this unique social app.