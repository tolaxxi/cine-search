import { genreFilters } from '../../data/searchFilters.js';

const MovieFilters = () => {
  return (
    <div className="w-[90%] text-center flex flex-wrap gap-2 items-center justify-center">
      {genreFilters.map(({ id, filter }) => {
        return (
          <button className="text-indigo-50 outline-transparent border-2 px-5 py-2 rounded-3xl text-nowrap" key={id}>
            {filter}
          </button>
        );
      })}
    </div>
  );
};
export default MovieFilters;
