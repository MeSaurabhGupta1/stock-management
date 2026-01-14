import React from "react";
import { Stock } from "../types/Stock";
import StockItem from "./StockItem";
import StockItemSkeleton from "./StockItemSkeleton";
import "./StockList.css";

interface StockListProps {
  stocks: Stock[];
  loading: boolean;
  error: string | null;
}

const StockList: React.FC<StockListProps> = ({ stocks, loading, error }) => {
  if (loading) {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h4 className="text-white">Stock Results</h4>
          <span className="badge bg-primary rounded-pill fs-6">Loading...</span>
        </div>
        {/* Show 5 skeleton loaders */}
        {[...Array(5)].map((_, index) => (
          <StockItemSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Error Loading Stocks</h4>
        <p>{error}</p>
      </div>
    );
  }

  if (stocks.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        <h4 className="alert-heading">No Stocks Found</h4>
        <p>No stocks match your current filters or search criteria.</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ position: "sticky" }}
      >
        <h4 className="text-white">Stock Results</h4>
        <span className="badge bg-primary rounded-pill fs-6">
          {stocks.length} {stocks.length === 1 ? "stock" : "stocks"}
        </span>
      </div>
      <div className="stock-results-container">
        {stocks.map((stock) => (
          <StockItem key={stock.companyid} stock={stock} />
        ))}
      </div>
    </>
  );
};

export default StockList;
