import { getTrending, searchMovies } from 'services/themoviedb.org-API';

export const Movies = () => {
  (async function trendingMovies() {
    try {
      // const data = await getTrending();
      const data = await searchMovies('bmw');
      console.log(data);
    } catch (error) {}
  })();

  return <div>Movies</div>;
};
