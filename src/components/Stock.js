import React from "react";

function Stock({stock, name, ticker, price, onStockClick}) {
  return (
    <div>
      <div className="card" onClick={() => {onStockClick(stock)}}>
        <div className="card-body">
          <h3 className="card-title"><b>{name}</b></h3>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
