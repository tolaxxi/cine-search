import { useState } from 'react';
import MovieCard from '../../components/MovieCard.jsx';
import { useSearch } from '../../context/searchContext/useSearch.js';
import useFetchMovies from '../../hooks/useFetchMovies.js';
import { ClipLoader } from 'react-spinners';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useDebounce } from '../../hooks/useDebounce.js';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { query } = useSearch();
  const debouncedQuery = useDebounce(query, 1500);

  const { data, loading, error, totalPages } = useFetchMovies(debouncedQuery, page);

  function handlePageIncrease() {
    if (page < totalPages) {
      setPage((p) => p + 1);
    }
  }
  function handlePageDecrease() {
    if (page > 1) {
      setPage((p) => p - 1);
    }
  }
  if (loading) {
    return (
      <section className="w-full min-h-dvh justify-center flex items-center gradientBg">
        <ClipLoader className="text-center" color={'white'} size={90} aria-label="Loading Spinner" />;
      </section>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center text-4xl min-h-screen gradientBg text-red-400">
        <p>Something went wrong: {error.message}</p>
      </div>
    );
  }

  return (
    <section className="w-full gradientBg py-10 gap-10 flex-col flex justify-between items-center">
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 min-h-dvh gap-5  place-items-center ">
        {data.results?.map(
          ({
            original_title,
            overview,
            vote_average,
            backdrop_path,
            release_date,
            id,
            first_air_date,
            poster_path,
            name,
          }) => {
            return (
              <MovieCard
                key={id}
                original_title={original_title || name}
                overview={overview}
                backdrop_path={backdrop_path || poster_path}
                vote_average={vote_average}
                release_date={release_date || first_air_date}
              />
            );
          }
        )}
      </div>

      <div className="text-indigo-100 w-[80%] flex justify-between items-center">
        <button className="btn" onClick={handlePageDecrease}>
          <FaAngleLeft size={30} />
        </button>
        <p className="text-indigo-100 font-medium">
          page <span className="font-black">{page}</span> of <span className="font-black"> {totalPages}</span>
        </p>
        <button className="btn" onClick={handlePageIncrease}>
          <FaAngleRight size={30} />
        </button>
      </div>
    </section>
  );
};
export default Movies;
