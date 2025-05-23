// filepath: c:\Pribadi\Kuliah\Semester 4\Prak. SBD\Modul_9\TUTAM\backend\index.js
const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});