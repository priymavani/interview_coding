# Simple Express Server

This project is a simple Express.js server that provides basic CRUD operations for managing users.

## Features

1. **GET `/users`**: Fetch all users.
2. **POST `/users`**: Add a new user.
3. **GET `/users/:id`**: Fetch a user by ID.
4. **PUT `/users/:id`**: Update an entire user by ID.
5. **PATCH `/users/:id`**: Partially update a user by ID.

## Project Structure

- **`01.Simple_express_server.js`**: Main server file.
- **`package.json`**: Project metadata and dependencies.
- **`.gitignore`**: Specifies files/folders to ignore in version control.
- **`node_modules`**: Contains installed dependencies (ignored by Git).

## Dependencies

- `express`
- `nodemon`

## How to Run

1. Install dependencies:
   ```bash
   npm install