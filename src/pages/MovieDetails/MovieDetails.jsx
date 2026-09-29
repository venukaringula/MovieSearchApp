import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  useEffect(() => {

    const getMovieDetails = async () => {

      try {

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=991e8e13&i=${id}&plot=full`
        );

        const data = await response.json();

        if (data.Response === "True") {

          setMovie(data);

        } else {

          setError(data.Error);

        }

      } catch (error) {

        setError("Something went wrong.");

      }

      setLoading(false);
    };

    getMovieDetails();

  }, [id]);


  if (loading) {
    return (
      <p className="message">
        Loading movie details...
      </p>
    );
  }


  if (error) {
    return (
      <p className="error">
        {error}
      </p>
    );
  }


  return (
    <div className="details-container">

      <img
        className="details-poster"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
      />


      <div className="details-info">

        <h1>{movie.Title}</h1>

        <p>
          <strong>Year:</strong> {movie.Year}
        </p>

        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>

        <p>
          <strong>Director:</strong> {movie.Director}
        </p>

        <p>
          <strong>Actors:</strong> {movie.Actors}
        </p>

        <p>
          <strong>Runtime:</strong> {movie.Runtime}
        </p>

        <p>
          <strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}
        </p>

        <p>
          <strong>Language:</strong> {movie.Language}
        </p>

        <p>
          <strong>Plot:</strong>
        </p>

        <p>
          {movie.Plot}
        </p>

      </div>

    </div>
  );
}

export default MovieDetails;