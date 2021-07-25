import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, onPortfolioStockClick}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioStocks.map((stock) => {
          return (
            <Stock 
              name={stock.name}
              price={stock.price}
              ticker={stock.ticker}
              onStockClick={onPortfolioStockClick}
              stock={stock}
              key={stock.id}
            />
          )
        })
      }
    </div>
  );
}

export default PortfolioContainer;
