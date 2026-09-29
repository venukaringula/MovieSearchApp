import { useState } from "react";

import MovieCard from "../../components/MovieCard/MovieCard.jsx";

function Favorites() {

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );


  const removeFavorite = (id) => {

    const newFavorites = favorites.filter(
      (movie) => movie.imdbID !== id
    );

    setFavorites(newFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(newFavorites)
    );
  };


  return (
    <div className="page">

      <h1>❤️ My Favorite Movies</h1>

      {favorites.length === 0 ? (

        <p className="message">
          You haven't added any favorites yet.
        </p>

      ) : (

        <div className="movie-list">

          {favorites.map((movie) => (

            <div key={movie.imdbID}>

              <MovieCard movie={movie} />

              <button
                className="remove-button"
                onClick={() =>
                  removeFavorite(movie.imdbID)
                }
              >
                Remove Favorite
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Favorites;