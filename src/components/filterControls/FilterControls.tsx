import React from "react";
import { IoCashOutline, IoTrendingUp } from "react-icons/io5";
import { MinCurrentPriceProps } from "./FilterControls.type";
import styles from "../../App.module.css";
import { MIN_NUMERIC_VALUE, NUMERIC_STEP } from "../../constants";

export const MinCurrentPrice: React.FC<MinCurrentPriceProps> = React.memo(({
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value === "" ? 0 : parseFloat(e.target.value));
  };

  return (
    <>
      <label className="fs-6 fw-bold text-secondary mb-0" id="min-current-label">
        <IoCashOutline className="me-1" /> Min Current Price
      </label>
      <input
        type="number"
        className={styles.modernInput}
        placeholder="Filter by min price e.g., 100"
        value={value || ""}
        onChange={handleChange}
        min={MIN_NUMERIC_VALUE}
        step={NUMERIC_STEP}
        aria-label="Minimum current price filter"
        aria-describedby="min-current-label"
      />
    </>
  );
});

export interface MinPercentageChangeProps {
  value: number;
  onChange: (value: number) => void;
}

export const MinPercentageChange: React.FC<MinPercentageChangeProps> = React.memo((
  {
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value === "" ? 0 : parseFloat(e.target.value));
  };

  return (
    <>
      <label className="fs-6 fw-bold text-secondary mb-0" id="min-percentage-label">
        <IoTrendingUp className="me-1" /> Min % Change
      </label>
      <input
        type="number"
        className={styles.modernInput}
        placeholder="Filter by % change e.g., 5"
        value={value || ""}
        onChange={handleChange}
        min={MIN_NUMERIC_VALUE}
        step={NUMERIC_STEP}
        aria-label="Minimum percentage change filter"
        aria-describedby="min-percentage-label"
      />
    </>
  );
});
