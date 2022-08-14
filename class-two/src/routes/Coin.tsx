import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';

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

const Overview = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const Item = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  dt {
    font-size: 0.625rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  dd {
  }
`;

const Tabs = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin: 1.5rem 0;
`;

const Tab = styled.li<{ isActive: boolean }>`
  font-size: 0.75rem;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  a {
    display: block;
    padding: 0.5rem 0;
  }
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

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: Date;
  last_updated: Date;
  quotes: Quotes;
}

interface Quotes {
  USD: Usd;
}

interface Usd {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: Date;
  percent_from_price_ath: number;
}

const Coin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();

  const chartMatch = useMatch('/:coinId/chart');
  const priceMatch = useMatch('/:coinId/price');

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setInfo(infoData);
      setPriceInfo(priceData);
      setIsLoading(false);
    })();
  }, [coinId]);

  return (
    <>
      <Header>
        <Title>
          {state?.name ? state.name : isLoading ? 'Loading' : info?.name}
        </Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <main>
          <Overview>
            <Item>
              <dt>Rank:</dt>
              <dd>{info?.rank}</dd>
            </Item>
            <Item>
              <dt>Symbol:</dt>
              <dd>{info?.symbol}</dd>
            </Item>
            <Item>
              <dt>Open Source:</dt>
              <dd>{info?.open_source ? 'Yes' : 'No'}</dd>
            </Item>
          </Overview>
          <section>{info?.description}</section>
          <Overview>
            <Item>
              <dt>Total Suply:</dt>
              <dd>{priceInfo?.total_supply}</dd>
            </Item>
            <Item>
              <dt>Max Suply:</dt>
              <dd>{priceInfo?.max_supply}</dd>
            </Item>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Outlet />
        </main>
      )}
    </>
  );
};

export default Coin;
