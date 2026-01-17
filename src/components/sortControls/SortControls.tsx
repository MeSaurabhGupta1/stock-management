import React from "react";
import { IoSync } from "react-icons/io5";
import { SortControlsProps } from "./SortControls.type";
import { SortField } from "../../types/Stock";
import appStyles from "../../App.module.css";
import styles from "./SortControls.module.css";

const SortControls: React.FC<SortControlsProps> = ({
  sortField,
  onSortChange,
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value as SortField);
  };

  return (
    <>
      <label className="fs-6 fw-bold text-secondary mb-0">
        <IoSync className="me-1" /> Sort By
      </label>
      <select
        className={`${appStyles.modernInput} ${styles.selectInput}`}
        value={sortField}
        onChange={handleSortChange}
      >
        <option value="">No sorting</option>
        <option value="current">Current Price ↑</option>
        <option value="absolutechange">Absolute Change ↑</option>
        <option value="percentagechange">% Change ↑</option>
      </select>
    </>
  );
};

export default React.memo(SortControls);
