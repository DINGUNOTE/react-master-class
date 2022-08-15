import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinPrice } from '../api';
import styled from 'styled-components';

const PriceContainer = styled.section``;

const Overview = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
`;

const Value = styled.span<{ isPositive: boolean }>`
  color: ${(props) => (props.isPositive ? '#03a66d' : '#cf304a')};
  white-space: nowrap;
`;

interface IPriceProps {
  coinId: string;
}

const Price = () => {
  const { coinId } = useOutletContext<IPriceProps>();
  const { isLoading, data } = useQuery(
    ['price', coinId],
    () => fetchCoinPrice(coinId),
    {
      refetchInterval: 10000,
    }
  );

  const checkValue = (value: number | undefined) => {
    if (value) {
      return value > 0;
    }
  };

  return (
    <PriceContainer>
      {isLoading ? (
        'Loading...'
      ) : (
        <Overview>
          <Item>
            Price($):
            <Value isPositive={checkValue(data.quotes.USD.price) === true}>
              {data.quotes.USD.price.toFixed(6)}
            </Value>
          </Item>
          <Item>
            Max Change rate in last 24h:{' '}
            <Value
              isPositive={
                checkValue(data.quotes.USD.market_cap_change_24h) === true
              }
            >
              {data.quotes.USD.market_cap_change_24h}%
            </Value>
          </Item>
          <Item>
            Change rate last 30 minutes:{' '}
            <Value
              isPositive={
                checkValue(data.quotes.USD.percent_change_30m) === true
              }
            >
              {data.quotes.USD.percent_change_30m}%
            </Value>
          </Item>
          <Item>
            Change rate last 1 hours:{' '}
            <Value
              isPositive={
                checkValue(data.quotes.USD.percent_change_1h) === true
              }
            >
              {data.quotes.USD.percent_change_1h}%
            </Value>
          </Item>
          <Item>
            Change rate last 12 hours:{' '}
            <Value
              isPositive={
                checkValue(data.quotes.USD.percent_change_12h) === true
              }
            >
              {data.quotes.USD.percent_change_12h}%
            </Value>
          </Item>
          <Item>
            Change rate last 24 hours:{' '}
            <Value
              isPositive={
                checkValue(data.quotes.USD.percent_change_24h) === true
              }
            >
              {data.quotes.USD.percent_change_24h}%
            </Value>
          </Item>
        </Overview>
      )}
    </PriceContainer>
  );
};

export default Price;
