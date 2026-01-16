import React from "react";
import StockItem from "../stockItem/StockItem";
import StockItemSkeleton from "../stockItemSkeleton/StockItemSkeleton";
import styles from "./StockList.module.css";
import { StockListProps } from "./StockList.type";

const StockList: React.FC<StockListProps> = ({ stocks, loading, error }) => {
  if (loading) {
    return (
      <section className="m-3">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className={styles.headerColor}>Stock Results</h6>
          <span className={`${styles.badge} rounded-pill fs-7`}>
            Loading...
          </span>
        </div>
        {/* Show 5 skeleton loaders */}
        {[...Array(5)].map((_, index) => (
          <StockItemSkeleton key={`skeleton-${index}`} />
        ))}
      </section>
    );
  }

  if (error) {
    return (
      <div className={`${styles.alert} alert-danger m-3`} role="alert">
        <h4 className="alert-heading">Error Loading Stocks</h4>
        <p>{error}</p>
      </div>
    );
  }

  if (stocks.length === 0) {
    return (
      <div className={`${styles.alert} alert-info m-3`} role="alert">
        <h4 className="alert-heading">No Stocks Found</h4>
        <p>No stocks match your current filters or search criteria.</p>
      </div>
    );
  }

  return (
    <section className="m-3">
      <div
        className={`${styles.header} d-flex justify-content-between align-items-center mb-2`}
      >
        <h6 className={styles.headerColor}>Stock Results</h6>
        <span className={`${styles.badge} rounded-pill fs-7`}>
          {stocks.length} {stocks.length === 1 ? "stock" : "stocks"}
        </span>
      </div>
      <div className={styles.stockResultsContainer}>
        {stocks.map((stock) => (
          <StockItem key={stock.companyid} stock={stock} />
        ))}
      </div>
    </section>
  );
};

export default StockList;
