import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteBook from './DeleteBook';
import API_BASE_URL from '../apiConfig';

export default function Home() {
  const [books, setBooks] = useState([]);

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/books`);
      setBooks(res.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <section className="text-center m-60">
        <h1 className="text-5xl font-bold m-4">Welcome to Book Tracker</h1>
        <p className="text-gray-600 text-lg">
          Track your reading journey easily and elegantly.
        </p>
      </section>

      {/* Books Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">📘 Your Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="border rounded-xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
              <p className="text-gray-700 text-lg mb-1">by {book.author}</p>
              <p className="text-sm text-red-500 mb-4">Status: {book.status}</p>
              <div className="flex gap-4">
                <Link
                  to={`/books/${book.id}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Details
                </Link>
                <DeleteBook bookId={book.id} onDelete={fetchBooks} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}