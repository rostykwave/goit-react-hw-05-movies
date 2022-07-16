const BASE_URL = 'https://api.themoviedb.org/3';

const KEY = 'c24a579521956747b362db1dbfab545a';

async function fetchErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

export function getTrending() {
  return fetchErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function searchMovies(query = 'cat', page = 1) {
  return fetchErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&region=US&include_adult=false&query=${query}&page=${page}`
  );
}

export function getMovieDetails(id) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`
  );
}

export function getMovieCredits(id) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
}

export function getMovieReviews(id, page = 1) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=${page}`
  );
}
