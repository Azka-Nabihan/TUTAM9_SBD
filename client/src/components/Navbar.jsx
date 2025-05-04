import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide hover:underline">
          📚 Book Tracker
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:underline text-lg">
            Home
          </Link>
          <Link to="/add" className="hover:underline text-lg">
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
}