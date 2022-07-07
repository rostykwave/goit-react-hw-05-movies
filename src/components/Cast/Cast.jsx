import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';
import { ActorsAvatar, CastList } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  useEffect(() => {
    themoviedbAPI.getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  console.log(cast);

  return (
    <div>
      <h2>Cast {movieId}</h2>
      {cast && (
        <CastList>
          {cast.cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <ActorsAvatar>
                {' '}
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
              </ActorsAvatar>

              <h3>{name}</h3>
              <p>{character}</p>
            </li>
          ))}
        </CastList>
      )}
    </div>
  );
};
