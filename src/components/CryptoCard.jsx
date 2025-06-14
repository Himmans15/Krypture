import React from "react";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CryptoCard = ({ coin }) => {
  const trendColor = coin.price_change_percentage_24h >= 0 ? "green" : "red";

  return (
    <Link to={`/coin/${coin.id}`} key={coin.id}>
      <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-4">
          {/* Coin Info */}
          <div className="flex items-center gap-4">
            <img src={coin.image} alt={coin.name} className="w-12 h-12" />
            <div>
              <h2 className="text-lg font-bold">{coin.name}</h2>
              <p className="text-sm uppercase text-gray-500">{coin.symbol}</p>
            </div>
          </div>

          {/* 24h Change Badge */}
          <div
            className={`text-sm font-semibold px-2 py-1 rounded ${
              trendColor === "green"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {coin.price_change_percentage_24h?.toFixed(2)}%
          </div>
        </div>

        {/* Price Info */}
        <div className="text-gray-700 font-medium mb-1">
          💵 ${coin.current_price.toLocaleString()}
        </div>
        <div className="text-sm text-gray-400 mb-6">
          Market Cap: ${coin.market_cap.toLocaleString()}
        </div>

        {/* Sparkline at Bottom-Right */}
        {coin?.sparkline_in_7d?.price?.length > 0 && (
          <div className="absolute bottom-14 right-4 w-24 h-10">
            <Sparklines
              data={coin.sparkline_in_7d.price.slice(-24)}
              width={100}
              height={40}
            >
              <SparklinesLine
                color={trendColor}
                style={{ fill: "none", strokeWidth: 2 }}
              />
            </Sparklines>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CryptoCard;
