import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState(null);
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [searchInfo, setSearchInfo] = useState({
    sort: null,
    filter: "All"
  });

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => {setStocks(data)})
  }, []);

  function handleBuyPortfolioStocks(stock) {
    if(portfolioStocks.includes(stock)) {
      alert("You have already bought that stock!");
    }
    else {
      setPortfolioStocks((portfolioStocks) => [...portfolioStocks, stock]);
    }
  }

  function handleSellPortfolioStocks(stock) {
    const newPortfolioStocks = portfolioStocks.filter((portfolioStock) => {
      if(portfolioStock === stock) return false;
      return true;
    });

    setPortfolioStocks(newPortfolioStocks);
  }

  function handleSearchInfo(event) {
    setSearchInfo((searchInfo) => {
      return {
        ...searchInfo,
        [event.target.name]: event.target.value
      }
    });
  }

  return (
    <div>
      <SearchBar 
        onSearchChange={handleSearchInfo}
      />
      <div className="row">
        <div className="col-8">
          {stocks && <StockContainer 
            stocks={stocks}
            onStockClick={handleBuyPortfolioStocks}
            searchInfo={searchInfo}
          />}
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolioStocks={portfolioStocks}
            onPortfolioStockClick={handleSellPortfolioStocks}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
