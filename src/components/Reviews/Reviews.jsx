import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    themoviedbAPI.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      {reviews &&
        reviews.results.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      {reviews && reviews.results.length === 0 && (
        <p>There isn`t any reviews for this movie</p>
      )}
    </>
  );
};
