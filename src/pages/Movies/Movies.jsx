import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as themoviedbAPI from 'services/themoviedb.org-API';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === '' || query === null) return;
    console.log('fetch search');

    async function fetchMoviesOnQuery() {
      const movies = await themoviedbAPI.searchMovies(query);
      setMovies(movies);
    }

    fetchMoviesOnQuery();
  }, [query]);

  //   (async function trendingMovies() {
  //     try {
  //       // const data = await getTrending();
  //       const data = await searchMovies('bmw');
  //       console.log(data);
  //     } catch (error) {}
  //   })();
  // console.log(movies);
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
