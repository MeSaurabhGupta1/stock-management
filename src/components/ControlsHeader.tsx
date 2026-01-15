import React from "react";
import SearchBar from "./SearchBar";
import { MinCurrentPrice, MinPercentageChange } from "./FilterControls";
import SortControls from "./SortControls";
import { FilterOptions, SortField } from "../types/Stock";
import "./ControlsHeader.css";

interface ControlsHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  sortField: SortField;
  onSortChange: (field: SortField) => void;
}

const ControlsHeader: React.FC<ControlsHeaderProps> = ({
  searchTerm,
  onSearchChange,
  filters,
  onFilterChange,
  sortField,
  onSortChange,
}) => {
  return (
    <div className="d-flex gap-2 align-items-center m-3">
      <div className="search-bar-container">
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      </div>
      <div className="filter-container">
        <MinCurrentPrice
          value={filters.minCurrent}
          onChange={(value) => onFilterChange({ ...filters, minCurrent: value })}
        />
      </div>
      <div className="filter-container">
        <MinPercentageChange
          value={filters.minPercentageChange}
          onChange={(value) =>
            onFilterChange({ ...filters, minPercentageChange: value })
          }
        />
      </div>
      <div className="filter-container">
        <SortControls sortField={sortField} onSortChange={onSortChange} />
      </div>
    </div>
  );
};

export default ControlsHeader;
