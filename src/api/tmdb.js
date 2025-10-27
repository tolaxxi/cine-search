const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
console.log(API_KEY);
const BASE_URL = 'https://api.themoviedb.org/3';

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export async function fetchMovies(query, page = 1) {
  const endpoint = query
    ? `${BASE_URL}/search/multi?query=${encodeURIComponent(query)}&page=${page}`
    : `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  try {
    const response = await fetch(endpoint, OPTIONS);

    if (!response.ok) throw new Error('unable to fetch movie');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
