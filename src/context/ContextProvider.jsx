import SearchContextProvider from './searchContext/SearchContextProvider.jsx';

const ContextProvider = ({ children }) => {
  return <SearchContextProvider>{children}</SearchContextProvider>;
};
export default ContextProvider;
