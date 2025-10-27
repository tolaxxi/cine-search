import { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmdb.js';

const useFetchMovies = (query, page) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function LoadMovies() {
      try {
        setLoading(true);
        const result = await fetchMovies(query, page);
        if (isMounted) {
          setData(result);
          setTotalPages(result.total_pages || 0);
        }
      } catch (error) {
        if (isMounted) setError(error.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    LoadMovies();
    return () => {
      isMounted = false;
    };
  }, [query, page]);

  return {
    data,
    loading,
    error,
    totalPages,
  };
};
export default useFetchMovies;
