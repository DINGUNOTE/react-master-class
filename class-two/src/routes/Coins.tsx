import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchCoins } from '../api';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
`;

const CoinList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Coin = styled.li`
  color: ${(props) => props.theme.bgColor};
  background-color: #fff;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    transition: color 0.2s ease-in;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.textColor};
`;

const Loader = styled.p`
  text-align: center;
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_nwe: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);

  return (
    <>
      <Helmet>
        <title>TOP 100 Coin Tracker</title>
      </Helmet>
      <Header>
        <Title>TOP 100 Coin Tracker</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={coin}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  alt={coin.symbol}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </>
  );
};

export default Coins;
