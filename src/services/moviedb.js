import { BASE_URL, KEY } from 'constants/apiConstants';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

// async function fetchErrorHandling(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not Found'));
// }

export function getTrending() {
  return axios.get(`/trending/movie/day?`, {
    params: { api_key: KEY },
  });
  // return fetchErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function searchMovies(query = 'cat', page = '1') {
  return axios.get(`/search/movie?`, {
    params: {
      api_key: KEY,
      language: 'en-US',
      region: 'US',
      include_adult: 'false',
      query,
      page,
    },
  });
  // return fetchErrorHandling(
  //   `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&region=US&include_adult=false&query=${query}&page=${page}`
  // );
}

export function getMovieDetails(id) {
  return axios.get(`/movie/${id}?`, {
    params: { api_key: KEY, language: 'en-US' },
  });
  // return fetchErrorHandling(
  //   `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`
  // );
}

export function getMovieCredits(id) {
  return axios.get(`/movie/${id}/credits?`, {
    params: { api_key: KEY, language: 'en-US' },
  });
  // return fetchErrorHandling(
  //   `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  // );
}

export function getMovieReviews(id, page = 1) {
  return axios.get(`/movie/${id}/reviews?`, {
    params: { api_key: KEY, language: 'en-US', page },
  });
  // return fetchErrorHandling(
  //   `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=${page}`
  // );
}
