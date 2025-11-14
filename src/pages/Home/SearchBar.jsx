import { MdSearch } from 'react-icons/md';
import { useSearch } from '../../context/searchContext/useSearch.js';

const SearchBar = () => {
  const { query, setQuery } = useSearch();

  return (
    <div className="flex items-center py-2 gap-2 border-2 focus-within:outline-2  outline-offset-2 max-w-[900px] w-[90%] rounded-xl px-2 outline-indigo-200 border-indigo-500 text-gray-300 font-medium">
      <MdSearch size={25} className="text-blue-300" />
      <input
        type="text"
        className="flex-1 outline-none"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
