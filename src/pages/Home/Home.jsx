import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';

export const Home = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    themoviedbAPI.getTrending().then(setMovies);
  }, []);

  //   (async function trendingMovies() {
  //     try {
  //       // const data = await getTrending();
  //       const data = await searchMovies('bmw');
  //       console.log(data);
  //     } catch (error) {}
  //   })();
  console.log(movies);

  return (
    <div>
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.results.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
