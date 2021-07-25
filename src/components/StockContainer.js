import React from "react";
import Stock from "./Stock";

function StockContainer({searchInfo, stocks, onStockClick}) {

  const filteredStocks = stocks.filter((stock) => {
    if(!(searchInfo.filter === "All")) {
      if(stock.type===searchInfo.filter) return true;
      return false;
    }
    return true;
  });

  if(searchInfo.sort==="Price") {
      filteredStocks.sort((a,b) => (a.price < b.price) ? 1 : -1);
  }
  else {
    filteredStocks.sort((a,b) => (a.name > b.name) ? 1 : -1);
  }

  return (
    <div>
      <h2>Stocks</h2>
      {filteredStocks.map((stock) => {
        return (
          <Stock 
            name={stock.name}
            price={stock.price}
            ticker={stock.ticker}
            onStockClick={onStockClick}
            stock={stock}
            key={stock.id}
          />
        )
      })}
    </div>
  );
}

export default StockContainer;
