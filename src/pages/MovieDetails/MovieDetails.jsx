import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';
import { StateMachine } from 'components/StateMachine/StateMachine';
import { Status } from 'constants/stateMachineStatus';
import { useStateMachine } from 'hooks/useStateMachine';
import { MovieDetailsMain } from 'components/MovieDetailsMain/MovieDetailsMain';

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

        setMovie(data.data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }

    fetchMovieDetails(movieId);
  }, [movieId, setError, setStatus]);

  const location = useLocation();

  return (
    <>
      <StateMachine status={status} error={error} />

      {movie && <MovieDetailsMain movie={movie} location={location} />}
    </>
  );
};

export default MovieDetails;
