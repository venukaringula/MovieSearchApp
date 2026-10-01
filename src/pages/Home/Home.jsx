import { useState } from "react";

import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";

function Home() {

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const searchMovies = async (searchText) => {

    setLoading(true);
    setError("");

    try {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchText}`
      );

      const data = await response.json();

      if (data.Response === "True") {

        setMovies(data.Search);

      } else {

        setMovies([]);
        setError(data.Error);

      }

    } catch (error) {

      setError("Something went wrong.");

    }

    setLoading(false);
  };


  const addFavorite = (movie) => {

    const oldFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyExists = oldFavorites.some(
      (item) => item.imdbID === movie.imdbID
    );

    if (alreadyExists) {

      alert("Movie already added!");

      return;
    }

    const newFavorites = [
      ...oldFavorites,
      movie
    ];

    localStorage.setItem(
      "favorites",
      JSON.stringify(newFavorites)
    );

    alert("Movie added to favorites!");
  };


  return (
    <div className="page">

      <h1>🎬 Movie Search App</h1>

      <p className="subtitle">
        Search for your favorite movies
      </p>

      <SearchBar
        searchMovies={searchMovies}
      />

      {loading && (
        <p className="message">
          Loading movies...
        </p>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {!loading && !error && movies.length > 0 && (

        <MovieList
          movies={movies}
          addFavorite={addFavorite}
        />

      )}

    </div>
  );
}

export default Home;