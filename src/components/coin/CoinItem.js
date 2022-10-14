import React from "react";

const CoinItem = ({ coin }) => {
  const {
    name,
    current_price,
    price_change_percentage_24h,
    market_cap,
    total_volume,
    image,
  } = coin;
  console.log(coin);

  return (
    <div>
      <div className="flex justify-between items-center shadow-md px-2 py-3 rounded-md bg-blue/20 mb-4">
        <div className="flex items-center gap-x-3">
          <img className="h-10" src={image} alt="" />
          <h2>{name}</h2>
        </div>
        <p>${current_price.toLocaleString()}</p>
        <p
          className={`${
            price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {price_change_percentage_24h.toFixed(2)}%
        </p>
        <p className="hidden sm:inline-block">
          ${total_volume.toLocaleString()}
        </p>
        <p className="hidden sm:inline-block">${market_cap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CoinItem;
