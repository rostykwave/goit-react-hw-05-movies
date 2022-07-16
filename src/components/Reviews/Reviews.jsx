import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';
import {
  Status,
  StateMachine,
  useStateMachine,
} from 'components/StateMachine/StateMachine';

const Reviews = () => {
  const { movieId } = useParams();
  const { status, setStatus, error, setError } = useStateMachine();

  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    // themoviedbAPI.getMovieReviews(movieId).then(setReviews);

    async function fetchReviews() {
      try {
        setStatus(Status.PENDING);
        const data = await themoviedbAPI.getMovieReviews(movieId);

        setReviews(data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }

    fetchReviews();
  }, [movieId, setError, setStatus]);

  return (
    <>
      <StateMachine status={status} error={error} />

      {reviews &&
        reviews.results.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      {reviews && reviews.results.length === 0 && (
        <p>There isn`t any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
