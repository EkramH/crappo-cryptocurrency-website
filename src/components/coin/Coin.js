import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinItem from "./CoinItem";

const Coin = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="py-12 lg:py-24 bg-violet">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-[40px] font-medium text-center mb-16">
          Cryptocurrency Prices
        </h2>
        <div>
          <div className="flex justify-between items-center shadow-md px-2 py-3 rounded-md bg-blue/20 mb-5">
            <p>Name</p>
            <p>Price</p>
            <p>24h</p>
            <p className="hidden sm:inline-block">Volume</p>
            <p className="hidden sm:inline-block">Market Cap</p>
          </div>
          {coins.slice(0, 10).map((coin) => {
            return <CoinItem coin={coin} key={coin.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Coin;
