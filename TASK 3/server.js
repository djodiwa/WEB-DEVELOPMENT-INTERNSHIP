// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage
let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

let nextId = 3; // for generating new IDs

// GET /books - Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET /books/:id - Get a single book by id
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: "Title and author are required" });
    }
    const newBook = { id: nextId++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT /books/:id - Update a book by id
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    const bookIndex = books.findIndex(b => b.id === id);
    
    if (bookIndex === -1) return res.status(404).json({ error: "Book not found" });
    if (!title || !author) return res.status(400).json({ error: "Title and author are required" });

    books[bookIndex] = { id, title, author };
    res.json(books[bookIndex]);
});

// DELETE /books/:id - Delete a book by id
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);
    
    if (bookIndex === -1) return res.status(404).json({ error: "Book not found" });
    
    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook[0]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Books API running on http://localhost:${PORT}`);
});