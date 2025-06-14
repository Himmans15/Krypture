import React, { useEffect, useState } from "react";
import { fetchCryptoNews } from "../services/newsApi";

const TrendNews = () => {
  const [cryptoArticles, setCryptoArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const crypto = await fetchCryptoNews();
        setCryptoArticles(crypto);
      } catch (error) {
        console.error("Error fetching crypto news:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const renderCard = (article, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
    >
      <img
        src={
          article.thumbnail ||
          article.enclosure?.link ||
          "https://via.placeholder.com/300x150?text=No+Image"
        }
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
        <p className="text-xs text-gray-500 mb-4">
          {new Date(article.pubDate).toLocaleDateString()}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={`https://www.google.com/s2/favicons?domain=${
                new URL(article.link).hostname
              }`}
              alt="Source"
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-600 truncate max-w-[100px]">
              {new URL(article.link).hostname.replace("www.", "")}
            </span>
          </div>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            Read →
          </a>
        </div>
      </div>
    </div>
  );

  const renderSkeleton = () => (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 rounded-xl p-4 animate-pulse h-80"
        ></div>
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6">🔗 Crypto News</h2>
        {loading ? (
          renderSkeleton()
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cryptoArticles.map(renderCard)}
          </div>
        )}
      </section>
    </div>
  );
};

export default TrendNews;
