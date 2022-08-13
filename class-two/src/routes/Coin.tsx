import { useParams } from 'react-router-dom';

const Coin = () => {
  const { coinId } = useParams();

  return <h1>Coin</h1>;
};

export default Coin;
