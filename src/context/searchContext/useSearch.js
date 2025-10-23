import { useContext } from 'react';
import { SearchContext } from './SearchContext.jsx';

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (context === null) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
