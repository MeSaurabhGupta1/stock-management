import React from "react";
import { IoSearchOutline, IoCloseCircle } from "react-icons/io5";
import { SearchBarProps } from "./SearchBar.type";
import appStyles from "../../App.module.css";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleClearSearch = () => {
    onSearchChange("");
  };

  return (
    <>
      <label className="fs-6 fw-bold text-secondary mb-0">
        <IoSearchOutline className="me-1" /> Search Stocks
      </label>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={appStyles.modernInput}
          placeholder="Enter stock name to search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClearSearch}
            className={styles.clearButton}
            title="Clear search"
          >
            <IoCloseCircle />
          </button>
        )}
      </div>
    </>
  );
};

export default React.memo(SearchBar);
