import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import styled from 'styled-components';

const ChartContainer = styled.section`
  overflow: hidden;
`;

interface IChartProps {
  coinId: string;
}

interface IChartData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useOutletContext<IChartProps>();
  const { isLoading, data } = useQuery<IChartData[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 10000 }
  );

  return (
    <ChartContainer>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="candlestick"
          // series={[
          //   {
          //     name: 'open',
          //     data: data?.map((price) => Number(price.open)) as number[],
          //   },
          //   {
          //     name: 'high',
          //     data: data?.map((price) => Number(price.high)) as number[],
          //   },
          //   {
          //     name: 'low',
          //     data: data?.map((price) => Number(price.low)) as number[],
          //   },
          //   {
          //     name: 'close',
          //     data: data?.map((price) => Number(price.close)) as number[],
          //   },
          // ]}
          series={
            [
              {
                data: data?.map((price) => {
                  return {
                    x: price.time_close * 1000,
                    y: [price.open, price.high, price.low, price.close],
                  };
                }),
              },
            ] as unknown as number[]
          }
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              type: 'candlestick',
              fontFamily:
                'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
              toolbar: {
                show: false,
              },
              background: 'transparent',
              animations: {
                enabled: false,
              },
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              type: 'datetime',
              // categories: data?.map((price) =>
              //   new Date(price.time_close * 1000).toDateString()
              // ),
            },
            tooltip: {
              y: {
                formatter: (value) => {
                  if (value > 1) {
                    return `$ ${value.toFixed(2)}`;
                  } else {
                    return `$ ${value}`;
                  }
                },
              },
            },
          }}
        />
      )}
    </ChartContainer>
  );
};

export default Chart;
