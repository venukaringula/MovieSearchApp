import { Link } from "react-router-dom";

function MovieCard({ movie, addFavorite }) {

  return (
    <div className="movie-card">

      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }
          alt={movie.Title}
        />
      </Link>

      <div className="movie-info">

        <h2>{movie.Title}</h2>

        <p>Year: {movie.Year}</p>

        <p>Type: {movie.Type}</p>

        {addFavorite && (
          <button onClick={() => addFavorite(movie)}>
            ❤️ Add Favorite
          </button>
        )}

      </div>

    </div>
  );
}

export default MovieCard;