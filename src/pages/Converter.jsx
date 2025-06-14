import React, { useEffect, useState } from "react";
import { convertCoins, getCryptoList } from "../services/coinCurrencyAPI";
import ConverterForm from "../components/ConverterForm";

const Converter = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCoin, setFromCoin] = useState("bitcoin");
  const [toCurrency, setToCurrency] = useState("usd");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCryptoList()
      .then((data) => {
        setCryptoList(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  const handleConverter = async () => {
    try {
      const price = await convertCoins(fromCoin, toCurrency);
      console.log(price);
      setResult((price * amount).toFixed(2));
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900 text-center">
        Crypto Converter
      </h2>
      <ConverterForm
        cryptoList={cryptoList}
        amount={amount}
        fromCoin={fromCoin}
        toCurrency={toCurrency}
        result={result}
        error={error}
        setAmount={setAmount}
        setFromCoin={setFromCoin}
        setToCurrency={setToCurrency}
        handleConvert={handleConverter}
      />
    </div>
  );
};

export default Converter;
