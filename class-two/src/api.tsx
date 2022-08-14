const BASE_URL = 'https://api.coinpaprika.com/v1';

export const fetchCoins = async () =>
  fetch(`${BASE_URL}/coins`).then((response) => response.json());

export const fetchCoinInfo = (coinId: string) =>
  fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());

export const fetchCoinPrice = (coinId: string) =>
  fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
