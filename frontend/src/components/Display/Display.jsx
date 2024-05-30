import React, { useState } from "react";
import axios from 'axios';

function Display() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [error, setError] = useState(null);

  const handleSearchTitle = async () => {
    setError(null); 
    try {
      const response = await axios.get('http://localhost:3000/api/movies', {
        params: {
          title: searchTitle || null,
        },
      });

      if (response.data && response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError('No movies found');
      }

    } catch (error) {
      console.error('Error fetching data:', error.message || error);
      setError('Failed to fetch data');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center mb-8">
        <input
          type="text"
          placeholder="Search movie by Title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="w-1/2 p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleSearchTitle}
          className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded"
        >
          Search by Title
        </button>
      </div>

      {error && (
        <div className="text-red-500 mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="border border-gray-200 rounded shadow p-4">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
              alt={movie.Title}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-bold mb-2">{movie.Title}</h2>
            <p className="text-gray-600">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display;
