import React from "react";
import { IoSync } from "react-icons/io5";
import { SortField } from "../types/Stock";
interface SortControlsProps {
  sortField: SortField;
  onSortChange: (field: SortField) => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  sortField,
  onSortChange,
}) => {
  return (
    <>
      <label className="form-label small fw-bold text-white mb-2">
        <IoSync className="me-1" /> Sort By
      </label>
      <select
        className="form-select modern-input "
        value={sortField}
        onChange={(e) => onSortChange(e.target.value as SortField)}
      >
        <option value="">No sorting</option>
        <option value="current">Current Price ↑</option>
        <option value="absolutechange">Absolute Change ↑</option>
        <option value="percentagechange">% Change ↑</option>
      </select>
    </>
  );
};

export default SortControls;
