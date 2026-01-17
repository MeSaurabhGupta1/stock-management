import React, { useState, useEffect } from "react";
import StockItem from "../stockItem/StockItem";
import StockItemSkeleton from "../stockItemSkeleton/StockItemSkeleton";
import Pagination from "../pagination/Pagination";
import styles from "./StockList.module.css";
import { StockListProps } from "./StockList.type";
import { ITEMS_PER_PAGE, SKELETON_LOADER_COUNT } from "../../constants";

const StockList: React.FC<StockListProps> = ({ stocks, loading, error }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when stocks change
  useEffect(() => {
    setCurrentPage(1);
  }, [stocks]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Calculate pagination values
  const totalPages = Math.ceil(stocks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentStocks = stocks.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  if (loading) {
    return (
      <section className="m-3" role="status" aria-live="polite" aria-label="Loading stock results">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className={styles.headerColor}>Stock Results</h6>
          <span className={`${styles.badge} rounded-pill fs-7`}>
            Loading...
          </span>
        </div>
        {/* Show skeleton loaders */}
        {[...Array(SKELETON_LOADER_COUNT)].map((_, index) => (
          <StockItemSkeleton key={`skeleton-${index}`} />
        ))}
      </section>
    );
  }

  if (error) {
    return (
      <div className={`${styles.alert} alert-danger m-3`} role="alert" aria-live="assertive">
        <h4 className="alert-heading">Error Loading Stocks</h4>
        <p>{error}</p>
      </div>
    );
  }

  if (stocks.length === 0) {
    return (
      <div className={`${styles.alert} alert-info m-3`} role="status" aria-live="polite">
        <h4 className="alert-heading">No Stocks Found</h4>
        <p>No stocks match your current filters or search criteria.</p>
      </div>
    );
  }
  return (
    <section className="m-3" aria-label="Stock results">
      <div
        className={`${styles.header} d-flex justify-content-between align-items-center mb-2`}
      >
        <h6 className={styles.headerColor}>Stock Results</h6>
        <span className={`${styles.badge} rounded-pill fs-7`}>
          {stocks.length} {stocks.length === 1 ? "stock" : "stocks"}
        </span>
      </div>
      <div className={styles.stockResultsContainer}>
        {currentStocks.map((stock) => (
          <StockItem key={`${stock.ticker}-${stock.companyid}`} stock={stock} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default StockList;
