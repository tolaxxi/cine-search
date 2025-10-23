import { MdOutlineLocalMovies } from 'react-icons/md';
import SearchBar from './SearchBar.jsx';
import MovieFilters from './MovieFilters.jsx';

const Home = () => {
  return (
    <main className="flex flex-col gap-8 justify-center items-center bgImage h-dvh w-full">
      {/* hero text and subtitle */}
      <div className="text-center flex items-center gap-1 flex-col">
        <span className="flex text-indigo-200">
          <MdOutlineLocalMovies size={65} />
          <h1 className="text-6xl font-medium">Cine Search</h1>
        </span>
        <p className="text-xl text-indigo-50">Discover your next favorite movie from our vast collection</p>
      </div>

      {/* searchbar */}
      <SearchBar />
      {/* genre filters */}
      <MovieFilters />
    </main>
  );
};
export default Home;
