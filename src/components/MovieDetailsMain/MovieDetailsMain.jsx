import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Avatar } from './MovieDetailsMain.styled';
import { Box } from 'styleConfig/Box';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';
import PropTypes from 'prop-types';

export const MovieDetailsMain = ({ movie, location }) => {
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <main>
      <GoBackLink to={backLinkHref}>← Go back</GoBackLink>

      <Box display="flex">
        <Avatar>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
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
  );
};

MovieDetailsMain.propTypes = {
  movies: PropTypes.object,
  location: PropTypes.object.isRequired,
};
