import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}