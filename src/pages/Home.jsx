import React, { useEffect, useState } from "react";
import { getCoins } from "../services/cryptoAPI";
import CryptoCard from "../components/CryptoCard";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("market_cap_desc");

  const sortCoins = (coins) => {
    return [...coins].sort((a, b) => {
      switch (sortOption) {
        case "price_asc":
          return a.current_price - b.current_price;
        case "price_desc":
          return b.current_price - a.current_price;
        case "market_cap_desc":
          return b.market_cap - a.market_cap;
        case "market_cap_asc":
          return a.market_cap - b.market_cap;
        default:
          return 0;
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data);
    };
    fetchData();
  }, []);

  const filteredCoins = sortCoins(
    coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          💰 Krypture 💰
        </h1>
        <h3 className="text-2xl font-bold text-gray-500">Welcome To</h3>
        <p className="text-gray-500">
          Live market stats for top digital assets
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search for a coin..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex items-center space-x-2">
          <label className="font-medium">Sort by:</label>
          <select
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="market_cap_desc">Market Cap (High → Low)</option>
            <option value="market_cap_asc">Market Cap (Low → High)</option>
            <option value="price_desc">Price (High → Low)</option>
            <option value="price_asc">Price (Low → High)</option>
          </select>
        </div>
      </div>
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-700 ">
          🪙 Top 10 Crypto Currencies 🪙
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoins.map((coin) => (
          <CryptoCard coin={coin} key={coin.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
