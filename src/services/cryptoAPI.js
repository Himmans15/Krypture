import axios from "axios";

export const getCoins = async () => {
  const url = "https://api.coingecko.com/api/v3/coins/markets";
  const params = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 10,
    page: 1,
    sparkline: true,
  };
  const response = await axios.get(url, { params });
  return response.data;
};
