// const URL:`https://api.themoviedb.org/3/movie/550?api_key=c24a579521956747b362db1dbfab545a`;

const BASE_URL = 'https://api.themoviedb.org/3';

const KEY = 'c24a579521956747b362db1dbfab545a';

async function fetchFilms(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

export function getTrending() {
  return fetchFilms(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
}
export function searchMovies(query = 'cat', page = 1) {
  return fetchFilms(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&include_adult=false&query=${query}&page=${page}`
  );
}
