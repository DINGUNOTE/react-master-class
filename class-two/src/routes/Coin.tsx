import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem 1rem 1rem;
  max-width: 480px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.textColor};
`;

const Loader = styled.p`
  text-align: center;
`;

interface RouteState {
  state: {
    id: string;
    is_active: boolean;
    is_new: boolean;
    name: string;
    rank: number;
    symbol: string;
    type: string;
  };
}

const Coin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { coinId } = useParams();

  const { state } = useLocation() as RouteState;

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      console.log(infoData, priceData);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || 'Loading'}</Title>
      </Header>
      {isLoading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
};

export default Coin;
