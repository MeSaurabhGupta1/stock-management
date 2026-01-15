import React from "react";
import { Stock } from "../types/Stock";
import "./StockItem.css";

interface StockItemProps {
  stock: Stock;
}

const StockItem: React.FC<StockItemProps> = ({ stock }) => {
  const current = parseFloat(stock.current);
  const absoluteChange = parseFloat(stock.absolutechange);
  const percentageChange = parseFloat(stock.percentagechange);
  const high = parseFloat(stock.high);
  const low = parseFloat(stock.low);

  const isPositive = absoluteChange >= 0;

  return (
    <div className="card d-flex flex-row align-items-center gap-2 mt-1 mb-1 p-1 ps-4 pe-4">
      <div className="stock-company-section d-flex flex-column gap-0">
        <div className="fw-bold stock-company-name">
          {stock.companyShortName}
        </div>
        <small className="text-muted stock-ticker">{stock.ticker}</small>
      </div>
      <div className="stock-data-section d-flex flex-column gap-0 align-items-end">
        <div className="fw-bold stock-current-price">₹{current.toFixed(2)}</div>
        <small className="text-muted stock-label">Current</small>
      </div>
      <div className="stock-data-section d-flex flex-column gap-0 align-items-end">
        <div
          className={`${
            isPositive ? "text-success" : "text-danger"
          } stock-change`}
        >
          {isPositive ? "▲" : "▼"} {Math.abs(absoluteChange).toFixed(2)}
        </div>
        <small className="text-muted stock-label">Change</small>
      </div>
      <div className="stock-data-section d-flex flex-column gap-0 align-items-end">
        <span
          className={`badge ${
            isPositive ? "bg-success" : "bg-danger"
          } stock-badge`}
        >
          {isPositive ? "+" : ""}
          {percentageChange.toFixed(2)}%
        </span>
        <small className="text-muted stock-label">% Change</small>
      </div>
      <div className="stock-data-section d-flex flex-column gap-0 align-items-end">
        <div className="text-success fw-bold stock-high-low">
          {high.toFixed(2)}
        </div>
        <small className="text-muted stock-label">High</small>
      </div>
      <div className="stock-data-section d-flex flex-column gap-0 align-items-end">
        <div className="text-danger fw-bold stock-high-low">
          {low.toFixed(2)}
        </div>
        <small className="text-muted stock-label">Low</small>
      </div>
    </div>
  );
};

export default StockItem;
