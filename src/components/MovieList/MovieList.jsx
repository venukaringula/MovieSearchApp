import MovieCard from "../MovieCard/MovieCard.jsx";

function MovieList({ movies, addFavorite }) {

  return (
    <div className="movie-list">

      {movies.map((movie) => (

        <MovieCard
          key={movie.imdbID}
          movie={movie}
          addFavorite={addFavorite}
        />

      ))}

    </div>
  );
}

export default MovieList;