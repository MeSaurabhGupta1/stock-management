import React from "react";
import { IoCashOutline, IoTrendingUp } from "react-icons/io5";
import {
  MinCurrentPriceProps,
  MinPercentageChangeProps,
} from "./FilterControls.type";
import styles from "../../App.module.css";
import { MIN_NUMERIC_VALUE, NUMERIC_STEP } from "../../constants";
import { parseFloatSafe } from "../../utils/numberUtils";

export const MinCurrentPrice: React.FC<MinCurrentPriceProps> = React.memo(
  ({ value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value === "" ? 0 : parseFloatSafe(e.target.value));
    };

    return (
      <>
        <label className="fs-6 fw-bold text-secondary mb-0">
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
        />
      </>
    );
  }
);

export const MinPercentageChange: React.FC<MinPercentageChangeProps> =
  React.memo(({ value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value === "" ? 0 : parseFloatSafe(e.target.value));
    };

    return (
      <>
        <label className="fs-6 fw-bold text-secondary mb-0">
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
        />
      </>
    );
  });
