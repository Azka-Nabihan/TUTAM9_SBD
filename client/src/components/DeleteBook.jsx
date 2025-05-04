import axios from 'axios';
import API_BASE_URL from '../apiConfig';

export default function DeleteBook({ bookId, onDelete }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this book?');
    if (confirmDelete) {
      try {
        await axios.delete(`${API_BASE_URL}/books/${bookId}`);
        alert('Book deleted successfully!');
        if (onDelete) {
          onDelete(); // Callback to refresh the book list or perform other actions
        }
      } catch (error) {
        console.error('Error deleting book:', error);
        alert('Failed to delete the book. Please try again.');
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-sm text-red-500 hover:underline"
    >
      Delete
    </button>
  );
}