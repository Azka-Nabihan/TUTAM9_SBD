import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../apiConfig';

export default function AddBook() {
  const [form, setForm] = useState({ title: '', author: '', status: 'belum dibaca' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_BASE_URL}/books`, form);
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-600">➕ Add a New Book</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="title"
              type="text"
              placeholder="Book Title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              name="author"
              type="text"
              placeholder="Author"
              value={form.author}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="belum dibaca">Belum Dibaca</option>
              <option value="sedang dibaca">Sedang Dibaca</option>
              <option value="selesai">Selesai</option>
            </select>
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Save Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}