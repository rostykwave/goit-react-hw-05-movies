import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Avatar } from './MovieDetails.styled';
import { Box } from 'styleConfig/Box';
import { StyledGoBackLink } from 'components/goBackLink/goBackLink';
import {
  Status,
  StateMachine,
  useStateMachine,
} from 'components/StateMachine/StateMachine';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { status, setStatus, error, setError } = useStateMachine();

  useEffect(() => {
    // themoviedbAPI.getMovieDetails(movieId).then(setMovie);

    async function fetchMovieDetails(movieId) {
      try {
        setStatus(Status.PENDING);
        const data = await themoviedbAPI.getMovieDetails(movieId);

        setMovie(data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }

    fetchMovieDetails(movieId);
  }, [movieId, setError, setStatus]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      <StateMachine status={status} error={error} />

      {movie && (
        <main>
          <StyledGoBackLink to={backLinkHref}>← Go back</StyledGoBackLink>

          <Box display="flex">
            <Avatar>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              ></img>
            </Avatar>
            <Box ml="30px">
              <h2>
                {movie.original_title}
                <span> ({movie.release_date.slice(0, 4)})</span>
              </h2>
              <p>User Score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>

              <h3>Genres</h3>
              <p>
                {movie.genres.length
                  ? movie.genres.map(g => g.name).join(' ')
                  : 'genres are not described'}
              </p>
            </Box>
          </Box>
          <Box borderTop="1px solid" borderBottom="1px solid">
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast" state={{ from: location }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: location }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </Box>
          <Box minHeight="40vh">
            {/* <Suspense fallback={<Loader />}> */}
            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </Box>
        </main>
      )}
    </>
  );
};

export default MovieDetails;
