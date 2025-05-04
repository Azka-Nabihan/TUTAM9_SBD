const pool = require('../db');

// GET all books
exports.getAllBooks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM books ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET single book by id
exports.getBookById = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new book
exports.createBook = async (req, res) => {
  const { title, author, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO books (title, author, status) VALUES ($1, $2, $3) RETURNING *',
      [title, author, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE book
exports.deleteBook = async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 