import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  Status,
  StateMachine,
  useStateMachine,
} from 'components/StateMachine/StateMachine';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  const { status, setStatus, error, setError } = useStateMachine();

  useEffect(() => {
    if (query === '' || query === null) return;

    async function fetchMoviesOnQuery() {
      try {
        setStatus(Status.PENDING);
        const data = await themoviedbAPI.getTrending();

        setMovies(data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }

    fetchMoviesOnQuery();
  }, [query, setError, setStatus]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <div>
      <div>Movies</div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="query" />
        </label>
        <button type="submit">Search</button>
      </form>
      <StateMachine status={status} error={error} />

      {movies && (
        <ul>
          {movies.results.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
