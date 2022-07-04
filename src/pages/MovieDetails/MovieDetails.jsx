import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    themoviedbAPI.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  // console.log(movie);
  // console.log(movieId);

  return (
    <>
      {/* <div>MovieDetails</div> */}
      {/* <div>Now showing product with id - {movieId}</div> */}
      {movie && (
        <>
          <div>
            <div>ID:{movie.id}</div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.original_title}
            ></img>
            <h2>{movie.original_title}</h2>
            <p>User Score: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(g => g.name).join(' ')}</p>
          </div>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};
