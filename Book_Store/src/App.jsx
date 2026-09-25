import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([]);

  // 1. Fetch data from the correct endpoint (/books) when the component mounts
  const fetchdata = async () => {
    try {
      const res = await fetch('http://localhost:3001/books'); // Added /books endpoint
      const booksData = await res.json();
      setData(booksData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  // 2. Handler to toggle favorites inside db.json and synchronize UI state
  const toggleFavorite = async (book) => {
    const updatedStatus = !book.is_favorite;

    try {
      const res = await fetch(`http://localhost:3001/books/${book.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_favorite: updatedStatus }),
      });
      const updatedBook = await res.json();

      // Update state immediately so both routes refresh instantly
      setData(data.map((b) => (b.id === book.id ? updatedBook : b)));
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  return (
    <BrowserRouter>
      {/* Navigation Layout */}
      <nav style={{ padding: "15px", background: "#f0f0f0", display: "flex", gap: "20px" }}>
        <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>📚 All Books</Link>
        <Link to="/fav" style={{ textDecoration: "none", fontWeight: "bold" }}>❤️ Favorites</Link>
      </nav>

      {/* Route Definitions */}
      <Routes>
        {/* Home Route (/) */}
        <Route
          path="/"
          element={
            <div style={{ padding: "20px" }}>
              <h2>All Books</h2>
              {data.map((book) => (
                <div key={book.id} style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "5px" }}>
                  <h3>{book.name}</h3>
                  <p><strong>Writer:</strong> {book.writer} | <strong>Date:</strong> {book.written_date}</p>
                  <p>{book.overview}</p>
                  <button onClick={() => toggleFavorite(book)}>
                    {book.is_favorite ? "❤️ Unfavorite" : "🤍 Add to Favorites"}
                  </button>
                </div>
              ))}
            </div>
          }
        />

        {/* Favorites Route (/fav) */}
        <Route
          path="/fav"
          element={
            <div style={{ padding: "20px" }}>
              <h2>Your Favorite Books</h2>
              {data.filter(book => book.is_favorite).length === 0 ? (
                <p>No favorite books selected yet.</p>
              ) : (
                data.filter(book => book.is_favorite).map((book) => (
                  <div key={book.id} style={{ border: "1px solid pink", padding: "15px", margin: "10px 0", borderRadius: "5px", background: "#fff5f5" }}>
                    <h3>{book.name}</h3>
                    <p><strong>Writer:</strong> {book.writer}</p>
                    <button onClick={() => toggleFavorite(book)}>💔 Remove</button>
                  </div>
                ))
              )}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
