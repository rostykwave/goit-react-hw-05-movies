import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    themoviedbAPI.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);
  return (
    <>
      <div>MovieDetails</div>
      <div>Now showing product with id - {movieId}</div>
      {movie && (
        <div>
          <h2>{movie.original_title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.original_title}
          ></img>
        </div>
      )}
    </>
  );
};
