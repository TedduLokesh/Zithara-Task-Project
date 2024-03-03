# Zithara-Task-Project

# React and Node.js Application with PostgreSQL Database

This project is a full-stack web application built using React for the frontend, Node.js for the backend, and PostgreSQL for the database. It includes functionality to display data from a PostgreSQL database in a table format with search, pagination, and sorting features.

## Features

1. **Display Data:** The application fetches data from a PostgreSQL database and displays it in a table on the frontend.

2. **Search:** Users can search for data by the "name" or "location" columns.

3. **Pagination:** The table is paginated, displaying 20 records per page.

4. **Sort:** Users can sort the data either by "date" or by "time."

5. **Background Image:** The frontend has a visually appealing background image.

## Project Structure

- `client`: React frontend code.
- `server`: Node.js backend code.

## Setup Instructions

### Frontend (React)

1. Navigate to the `client` directory:

   ```bash
   cd client

2. Install dependencies:

   ```bash
   npx create-react-app .
   npm install bootstrap
   npm install axios

3. Start the React development  server:

   ```bash
   npm start

### Backend (Node.js)

1. Navigate to the 'server' directory:

   ```bash
   cd server

2. Install dependencies:

   ```bash
   npm install
   npm install cors
   npm install express
   npm install body-parser
   npm install pg

3. Start the Node.js server:

   ```bash
   npm start
   node index.js

## Server and Database Setup

### Server

The server will be running at `http://localhost:3001`.

### Database Setup

1. Set up a PostgreSQL database.

2. Create a table named `customers` with the necessary columns (`sno`, `name`, `age`, `phone`, `location`, `created_at`).

3. Insert sample data into the `customers` table.

### Configuration

- **Frontend Configuration:**
  Update the background image path in `client/src/App.js`.

- **Backend Configuration:**
  Update the database connection details in `server/index.js`.

   
