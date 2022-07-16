import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';
import { ActorsAvatar, CastItem, CastList } from './Cast.styled';
import defaultIMG from 'images/default/default-avatar-1.jpg';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  useEffect(() => {
    themoviedbAPI.getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <CastList>
          {cast.cast.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <ActorsAvatar>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  onError={event => {
                    event.target.src = defaultIMG;
                    event.onerror = null;
                  }}
                />
              </ActorsAvatar>
              <div>
                <h3>{name}</h3>
                <p>{character}</p>
              </div>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;
