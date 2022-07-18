import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies, location }) => (
  <ul>
    {movies.results.map(({ id, original_title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {original_title}
        </Link>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.object,
  location: PropTypes.object,
};
