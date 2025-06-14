import axios from "axios";

// Get general coin data
export const getCoinDetail = async (id) => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false`
  );
  return data;
};

// Get historical price chart data
export const getCoinMarketChart = async (id, days = 7, vs_currency = "usd") => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
    {
      params: {
        vs_currency,
        days,
      },
    }
  );
  return data.prices;
};
