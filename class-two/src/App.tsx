import Router from './Router';
import GlobalStyle from './GlobalStyle';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </>
  );
};

export default App;
