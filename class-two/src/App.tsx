import Router from './Router';
import GlobalStyle from './GlobalStyle';
import { ReactQueryDevtools } from 'react-query/devtools';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
};

export default App;
