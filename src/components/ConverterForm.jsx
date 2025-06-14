import React from "react";

const ConverterForm = ({
  cryptoList,
  amount,
  fromCoin,
  toCurrency,
  result,
  error,
  setAmount,
  setFromCoin,
  setToCurrency,
  handleConvert,
}) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">From (Crypto)</label>
        <select
          value={fromCoin}
          onChange={(e) => setFromCoin(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          {cryptoList.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">To (Currency)</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
          <option value="jpy">JPY</option>
        </select>
      </div>

      <button
        onClick={handleConvert}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
      >
        Convert
      </button>

      {error && <div className="mt-4 text-red-500 text-center">{error}</div>}

      {result && (
        <div className="mt-4 text-lg text-center">
          <strong>Result:</strong> {result} {toCurrency.toUpperCase()}
        </div>
      )}
    </>
  );
};

export default ConverterForm;
