import { useQuery } from 'react-query';
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoinInfo, fetchCoinPrice } from '../api';
import { Helmet } from 'react-helmet-async';

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  a {
    position: absolute;
    top: 50%;
    left: 0;
    font-size: 1.5rem;
    transform: translateY(-50%);
  }
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
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
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
`;

const Tab = styled.li<{ isActive: boolean }>`
  font-size: 0.75rem;
  color: ${(props) => props.theme.textColor};
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : 'rgba(0, 0, 0, 0.5)'};
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

interface IInfoData {
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

interface ITickersData {
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
  quotes: IQuotes;
}

interface IQuotes {
  USD: IUsd;
}

interface IUsd {
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
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;

  const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
    ['info', coinId],
    () => fetchCoinInfo(`${coinId}`)
  );
  const { isLoading: tickersLoading, data: tickersData } =
    useQuery<ITickersData>(
      ['tickers', coinId],
      () => fetchCoinPrice(`${coinId}`),
      { refetchInterval: 10000 }
    );

  const loading = infoLoading || tickersLoading;

  const chartMatch = useMatch('/:coinId/chart');
  const priceMatch = useMatch('/:coinId/price');

  return (
    <>
      <Helmet>
        <title>
          TOP 100 Coin Tracker |{' '}
          {state?.name ? state.name : loading ? 'Loading' : infoData?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? 'Loading' : infoData?.name}
        </Title>
        <Link to="/">&larr;</Link>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <main>
          <Overview>
            <Item>
              <dt>Rank:</dt>
              <dd>{infoData?.rank}</dd>
            </Item>
            <Item>
              <dt>Symbol:</dt>
              <dd>{infoData?.symbol}</dd>
            </Item>
            <Item>
              <dt>Price:</dt>
              <dd>${tickersData?.quotes.USD.price.toFixed(6)}</dd>
            </Item>
            <Item>
              <dt>Total Suply:</dt>
              <dd>{tickersData?.total_supply}</dd>
            </Item>
            <Item>
              <dt>Max Suply:</dt>
              <dd>{tickersData?.max_supply}</dd>
            </Item>
          </Overview>
          <section>{infoData?.description}</section>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Outlet context={{ coinId: coinId }} />
        </main>
      )}
    </>
  );
};

export default Coin;
