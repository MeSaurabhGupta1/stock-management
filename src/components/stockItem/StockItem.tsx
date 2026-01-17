import React from "react";
import styles from "./StockItem.module.css";
import { StockItemProps } from "./StockItem.type";
import {
  parseFloatSafe,
  formatCurrency,
  formatNumber,
  formatPercentage,
  isPositive,
  getDirectionalArrow,
} from "../../utils/numberUtils";

const StockItem: React.FC<StockItemProps> = ({ stock }) => {
  const current = parseFloatSafe(stock.current);
  const absoluteChange = parseFloatSafe(stock.absolutechange);
  const percentageChange = parseFloatSafe(stock.percentagechange);
  const high = parseFloatSafe(stock.high);
  const low = parseFloatSafe(stock.low);

  const changeIsPositive = isPositive(absoluteChange);

  return (
    <article className={`${styles.card} d-flex flex-row align-items-center gap-2 mt-1 mb-1 p-1 ps-4 pe-4`}>
      <section className={`${styles.stockCompanySection} d-flex flex-column gap-0`}>
        <strong className={`fw-bold ${styles.stockCompanyName}`}>
          {stock.companyShortName}
        </strong>
        <small className={`text-muted ${styles.stockTicker}`}>{stock.ticker}</small>
      </section>
      <section className={`${styles.stockDataSection} d-flex flex-column gap-0 align-items-end`}>
        <data className={`fw-bold ${styles.stockCurrentPrice}`} value={current}>{formatCurrency(current)}</data>
        <small className={`text-muted ${styles.stockLabel}`}>Current</small>
      </section>
      <section className={`${styles.stockDataSection} d-flex flex-column gap-0 align-items-end`}>
        <data
          className={`${
            changeIsPositive ? styles.textSuccess : styles.textDanger
          } ${styles.stockChange}`}
          value={absoluteChange}
        >
          {getDirectionalArrow(absoluteChange)} {formatNumber(Math.abs(absoluteChange))}
        </data>
        <small className={`text-muted ${styles.stockLabel}`}>Change</small>
      </section>
      <section className={`${styles.stockDataSection} d-flex flex-column gap-0 align-items-end`}>
        <data
          className={`${styles.badge} ${
            changeIsPositive ? styles.bgSuccess : styles.bgDanger
          } ${styles.stockBadge}`}
          value={percentageChange}
        >
          {formatPercentage(percentageChange)}
        </data>
        <small className={`text-muted ${styles.stockLabel}`}>% Change</small>
      </section>
      <section className={`${styles.stockDataSection} d-flex flex-column gap-0 align-items-end`}>
        <data className={`${styles.textSuccess} fw-bold ${styles.stockHighLow}`} value={high}>
          {formatNumber(high)}
        </data>
        <small className={`text-muted ${styles.stockLabel}`}>High</small>
      </section>
      <section className={`${styles.stockDataSection} d-flex flex-column gap-0 align-items-end`}>
        <data className={`${styles.textDanger} fw-bold ${styles.stockHighLow}`} value={low}>
          {formatNumber(low)}
        </data>
        <small className={`text-muted ${styles.stockLabel}`}>Low</small>
      </section>
    </article>
  );
};

export default React.memo(StockItem);
