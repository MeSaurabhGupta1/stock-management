import React from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <>
      <label className="form-label small fw-bold text-white mb-0">
        <IoSearchOutline className="me-1" /> Search Stocks
      </label>
      <input
        type="text"
        className="form-control modern-input"
        placeholder="Search by company name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
