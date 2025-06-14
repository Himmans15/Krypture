// src/services/newsApi.js
import axios from "axios";

export const fetchCryptoNews = async () => {
  const RSS_URL = "https://cointelegraph.com/feed";

  const response = await axios.get(
    `https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}`
  );
  return response.data.items;
};
