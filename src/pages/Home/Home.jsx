import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';
import { StateMachine } from 'components/StateMachine/StateMachine';
import { Status } from 'constants/stateMachineStatus';
import { useStateMachine } from 'hooks/useStateMachine';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const { status, setStatus, error, setError } = useStateMachine();

  useEffect(() => {
    // themoviedbAPI.getTrending().then(setMovies);
    async function fetchTrending() {
      try {
        setStatus(Status.PENDING);
        const data = await themoviedbAPI.getTrending();

        setMovies(data.data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }

    fetchTrending();
  }, [setError, setStatus]);

  const location = useLocation();

  return (
    <div>
      <h2>Trending today</h2>

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

export default Home;
