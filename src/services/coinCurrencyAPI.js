import axios from "axios";

const URL = "https://api.coingecko.com/api/v3";

export const getCryptoList = async (limit = 20) => {
  try {
    const res = await axios.get(`${URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: limit,
        page: 1,
      },
    });
    return res.data.map((coin) => ({
      id: coin.id,
      name: coin.name,
    }));
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data from API");
  }
};
export const convertCoins = async (cryptoId, currency) => {
  try {
    const res = await axios.get(`${URL}/simple/price`, {
      params: {
        ids: cryptoId,
        vs_currencies: currency,
      },
    });

    return res.data[cryptoId][currency];
  } catch (error) {
    console.log(error);
  }
};
