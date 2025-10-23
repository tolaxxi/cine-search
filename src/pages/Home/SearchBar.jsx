import { MdSearch } from 'react-icons/md';

const SearchBar = () => {
  return (
    <div className="flex items-center py-2 gap-2 border-2  max-w-[900px] w-[90%] rounded-xl px-2 border-indigo-500 text-gray-300 font-medium">
      <MdSearch size={25} className="text-blue-500" />
      <input type="text" className="flex-1 outline-none" placeholder="Search for movies..." />
    </div>
  );
};
export default SearchBar;
