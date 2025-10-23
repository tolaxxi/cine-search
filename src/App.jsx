import ContextProvider from './context/ContextProvider.jsx';
import Home from './pages/Home/Home.jsx';
import Movies from './pages/Movie/Movies.jsx';

const App = () => {
  return (
    <ContextProvider>
      <Home />
      <Movies />
    </ContextProvider>
  );
};
export default App;
