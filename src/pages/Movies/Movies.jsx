import { useEffect, useState } from 'react';
import * as themoviedbAPI from 'services/themoviedb.org-API';
import { useSearchParams, useLocation } from 'react-router-dom';
import { StateMachine } from 'components/StateMachine/StateMachine';
import { Status } from 'constants/stateMachineStatus';
import { useStateMachine } from 'hooks/useStateMachine';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesForm } from 'components/MoviesForm/MoviesForm';

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
        const data = await themoviedbAPI.searchMovies(query);

        setMovies(data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }

    fetchMoviesOnQuery();
  }, [query, setError, setStatus]);

  const handleSubmit = ({ query }) => {
    setSearchParams({ query });
  };

  return (
    <div>
      <div>Movies</div>
      <MoviesForm onSubmit={handleSubmit} />

      <StateMachine status={status} error={error} />

      {movies && <MoviesList movies={movies} location={location} />}
    </div>
  );
};

export default Movies;
