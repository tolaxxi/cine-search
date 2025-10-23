import { useState } from 'react';
import { SearchContext } from './SearchContext.jsx';

const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState('');

  const value = {
    query,
    setQuery,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
export default SearchContextProvider;
