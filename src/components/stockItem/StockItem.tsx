import React from "react";
import styles from "./StockItem.module.css";
import { StockItemProps } from "./StockItem.type";

const StockItem: React.FC<StockItemProps> = ({ stock }) => {
  const current = parseFloat(stock.current);
  const absoluteChange = parseFloat(stock.absolutechange);
  const percentageChange = parseFloat(stock.percentagechange);
  const high = parseFloat(stock.high);
  const low = parseFloat(stock.low);

  const isPositive = absoluteChange >= 0;

  return (
    <article className={`${styles.card} d-flex flex-row align-items-center gap-2 mt-1 mb-1 p-1 ps-4 pe-4`}>
      <section className={`${styles.stockCompanySection} d-flex flex-column gap-0`}>
        <strong className={`fw-bold ${styles.stockCompanyName}`}>
          {stock.companyShortName}
        </strong>
        <small className={`text-muted ${styles.stockTicker}`}>{stock.ticker}</small>
      </section>
      <section className={`${styles.stockDataSection} d-flex flex-column gap-0 align-items-end`}>
        <data className={`fw-bold ${styles.stockCurrentPrice}`} value={current}>₹{current.toFixed(2)}</data>
        <small className={`text-muted ${styles.stockLabel}`}>Current</small>
      </section>
      <section className={`${styles.stockDataSection} d-flex flex-column gap-0 align-items-end`}>
        <data
          className={`${
            isPositive ? styles.textSuccess : styles.textDanger
          } ${styles.stockChange}`}
          value={absoluteChange}
        >
          {isPositive ? "▲" : "▼"} {Math.abs(absoluteChange).toFixed(2)}
        </data>
        <small className={`text-muted ${styles.stockLabel}`}>Change</small>
      </section>
      <section className={`${styles.stockDataSection} d-flex flex-column gap-0 align-items-end`}>
        <data
          className={`${styles.badge} ${
            isPositive ? styles.bgSuccess : styles.bgDanger
          } ${styles.stockBadge}`}
          value={percentageChange}
        >
          {isPositive ? "+" : ""}
          {percentageChange.toFixed(2)}%
        </data>
        <small className={`text-muted ${styles.stockLabel}`}>% Change</small>
      </section>
      <section className={`${styles.stockDataSection} d-flex flex-column gap-0 align-items-end`}>
        <data className={`${styles.textSuccess} fw-bold ${styles.stockHighLow}`} value={high}>
          {high.toFixed(2)}
        </data>
        <small className={`text-muted ${styles.stockLabel}`}>High</small>
      </section>
      <section className={`${styles.stockDataSection} d-flex flex-column gap-0 align-items-end`}>
        <data className={`${styles.textDanger} fw-bold ${styles.stockHighLow}`} value={low}>
          {low.toFixed(2)}
        </data>
        <small className={`text-muted ${styles.stockLabel}`}>Low</small>
      </section>
    </article>
  );
};

export default StockItem;
