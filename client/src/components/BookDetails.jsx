// src/pages/BookDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../apiConfig';

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/books/${id}`).then(res => setBook(res.data));
  }, [id]);

  if (!book) return <p className="p-4">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2">📖 {book.title}</h2>
      <p className="text-gray-700 text-lg mb-1">Author: {book.author}</p>
      <p className="text-red-600 text-sm">Status: {book.status}</p>
    </div>
  );
}