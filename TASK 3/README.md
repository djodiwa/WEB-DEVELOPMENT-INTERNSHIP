
# WEB DEVELOPMENT INTERNSHIP - Task 3: Create a REST API to Manage a List of Books

## Overview
As part of my Node.js internship, I successfully completed **Task 3** by building a fully functional **RESTful API** using **Express.js** that performs complete **CRUD operations** (Create, Read, Update, Delete) on a collection of books.  
The data is stored **in-memory** (no database required) exactly as specified in the task. The API exposes clean, standard endpoints and follows REST conventions properly.

**Deliverables**:  
- `server.js` – Main application file  
- `package.json` – Project configuration and dependencies  

## API Endpoints Summary

| Method   | Endpoint          | Description                          | Request Body (JSON)                  | Response                              |
|----------|-------------------|--------------------------------------|--------------------------------------|---------------------------------------|
| GET      | `/books`          | Get all books                        | -                                    | 200 + array of books                  |
| GET      | `/books/:id`      | Get a single book by ID              | -                                    | 200 + book object OR 404              |
| POST     | `/books`          | Add a new book                       | `{ "title": "...", "author": "..." }`| 201 + created book                    |
| PUT      | `/books/:id`      | Update an existing book              | `{ "title": "...", "author": "..." }`| 200 + updated book OR 404/400         |
| DELETE   | `/books/:id`      | Delete a book                        | -                                    | 200 + deleted book OR 404             |

## Features Implemented
- Auto-incrementing IDs for new books
- Proper HTTP status codes (200, 201, 400, 404)
- Input validation (title & author required)
- JSON request/response handling using `express.json()` middleware
- Clean error messages
- Initial sample data (2 books) so the API works immediately on start

## Tools & Technologies Used
- **Node.js** (v18+)
- **Express.js** – Minimalist web framework
- **Visual Studio Code** – Code editor
- **Postman** – For manual testing of all endpoints
- **nodemon** – Auto-restart server during development (`npm run dev`)

## Project Setup & How to Run (Step-by-Step)

1. Open VS Code → create a new folder → open terminal inside it
2. Initialize project  
   ```bash
   npm init -y
   ```
3. Install dependencies  
   ```bash
   npm install express
   npm install --save-dev nodemon
   ```
4. Create `server.js` and paste the code provided
5. Start the server in development mode  
   ```bash
   npm run dev
   ```
   You will see:  
   `Books API running on http://localhost:3000`

6. (Optional) Add a start script without nodemon  
   ```bash
   npm start
   ```

The server is now live at **http://localhost:3000**

## Testing the API with Postman (or Thunder Client)

### 1. GET all books
```
GET http://localhost:3000/books
→ Returns the initial 2 books
```

### 2. GET one book
```
GET http://localhost:3000/books/1
```

### 3. POST – Add a new book
```
POST http://localhost:3000/books
Body → raw → JSON:
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien"
}
→ Returns 201 + the new book with auto-generated ID
```

### 4. PUT – Update a book
```
PUT http://localhost:3000/books/1
Body → raw → JSON:
{
  "title": "Animal Farm",
  "author": "George Orwell"
}
```

### 5. DELETE a book
```
DELETE http://localhost:3000/books/2
→ Returns the deleted book
```

## What I Learned from This Task
- How to set up a Node.js + Express project from scratch
- Difference between `app.use()`, routing, and middleware
- REST API design principles and proper use of HTTP methods/status codes
- Reading request body with `req.body` and sending JSON responses
- Dynamic route parameters (`:id`) and parsing them
- In-memory data management with arrays and `findIndex`
- Auto-incrementing IDs without a database
- Testing APIs effectively using Postman
- Using `nodemon` for faster development workflow

This task gave me a rock-solid foundation in backend development with Node.js and prepared me for connecting real databases (MongoDB, PostgreSQL, etc.) in future tasks.

Thank you for the opportunity!

