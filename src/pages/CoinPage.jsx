import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Sparklines, SparklinesLine } from "react-sparklines";

import {
  Chart as ChartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { getCoinDetail, getCoinMarketChart } from "../services/coinDetailAPI";

ChartJS.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDays, setSelectedDays] = useState(7);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const [coinData, marketHistory] = await Promise.all([
          getCoinDetail(id),
          getCoinMarketChart(id, selectedDays),
        ]);
        setCoin(coinData);
        setHistory(marketHistory);
      } catch (error) {
        console.error("Failed to load coin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [id, selectedDays]);

  if (loading || !coin) {
    return <div className="text-center py-6">Loading coin data...</div>;
  }

  const chartData = {
    labels: history.map((h) => h[0]),
    datasets: [
      {
        label: `${coin.name} Price (7d)`,
        data: history.map((h) => h[1]),
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "time",
        time: { unit: "day" },
        ticks: { color: "#6b7280" },
      },
      y: {
        ticks: { color: "#6b7280" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "#111827" },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6 gap-4">
        <img src={coin.image.large} alt={coin.name} className="w-16 h-16" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{coin.name}</h1>
          <p className="uppercase text-gray-500">{coin.symbol}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <p className="text-gray-600">Current Price</p>
          <p className="text-xl font-semibold">
            ${coin.market_data.current_price.usd.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-600">Market Cap</p>
          <p className="text-xl font-semibold">
            ${coin.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-600">24h Change</p>
          <p
            className={`text-xl font-semibold ${
              coin.market_data.price_change_percentage_24h >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {coin.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        {[1, 7, 30].map((day) => (
          <button
            key={day}
            className={`px-3 py-1 rounded-md text-sm font-medium border ${
              selectedDays === day
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600"
            }`}
            onClick={() => setSelectedDays(day)}
          >
            {day === 1 ? "1 Day" : `${day} Days`}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow p-4 h-[300px]">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default CoinPage;
