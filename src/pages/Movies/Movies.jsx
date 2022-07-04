// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import * as themoviedbAPI from 'services/themoviedb.org-API';

export const Movies = () => {
  // const [movies, setMovies] = useState(null);
  // useEffect(() => {
  //   themoviedbAPI.getTrending().then(setMovies);
  // }, []);

  //   (async function trendingMovies() {
  //     try {
  //       // const data = await getTrending();
  //       const data = await searchMovies('bmw');
  //       console.log(data);
  //     } catch (error) {}
  //   })();
  // console.log(movies);

  return (
    <div>
      <div>Movies</div>
      <form>
        <label>
          <input />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
