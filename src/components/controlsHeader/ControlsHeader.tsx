import React from "react";
import SearchBar from "../searchBar/SearchBar";
import {
  MinCurrentPrice,
  MinPercentageChange,
} from "../filterControls/FilterControls";
import SortControls from "../sortControls/SortControls";
import styles from "./ControlsHeader.module.css";
import { ControlsHeaderProps } from "./ControlsHeader.type";
import { MdFilterAltOff } from "react-icons/md";

const ControlsHeader: React.FC<ControlsHeaderProps> = ({
  searchTerm,
  onSearchChange,
  filters,
  onFilterChange,
  sortField,
  onSortChange,
}) => {
  const handleMinCurrentChange = (value: number) => {
    onFilterChange({ ...filters, minCurrent: value });
  };

  const handleMinPercentageChange = (value: number) => {
    onFilterChange({ ...filters, minPercentageChange: value });
  };
  const clearAllFilters = () => {
    onFilterChange({ minCurrent: 0, minPercentageChange: 0 });
  };
  return (
    <nav className="d-flex gap-2 align-items-center mx-3 mb-2 pt-2">
      <div className={styles.searchBarContainer}>
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      </div>
      <div className={styles.filterContainer}>
        <SortControls sortField={sortField} onSortChange={onSortChange} />
      </div>
      <div className={styles.filterContainer}>
        <MinCurrentPrice
          value={filters.minCurrent}
          onChange={handleMinCurrentChange}
        />
      </div>
      <div className={styles.filterContainer}>
        <MinPercentageChange
          value={filters.minPercentageChange}
          onChange={handleMinPercentageChange}
        />
      </div>

      <button
        type="button"
        title="Clear all filters"
        className={styles.clearFilterButton}
        onClick={clearAllFilters}
      >
        <MdFilterAltOff />
      </button>
    </nav>
  );
};

export default ControlsHeader;
