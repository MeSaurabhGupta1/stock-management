import React, { useState, useEffect, useMemo, useCallback } from "react";
import ControlsHeader from "../controlsHeader/ControlsHeader";
import StockList from "../stockList/StockList";
import { Stock, FilterOptions, SortField } from "../../types/Stock";
import { fetchStocks } from "../../services/stockService";
import { parseFloatSafe } from "../../utils/numberUtils";
import styles from "./StockDashboard.module.css";

const StockDashboard: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<FilterOptions>({
    minCurrent: 0,
    minPercentageChange: 0,
  });
  const [sortField, setSortField] = useState<SortField>("");

  useEffect(() => {
    loadStocks();
  }, []);

  const loadStocks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchStocks();
      setStocks(data.searchresult || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load stocks");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleFilterChange = useCallback((newFilters: FilterOptions) => {
    setFilters(newFilters);
  }, []);

  const handleSortChange = useCallback((field: SortField) => {
    setSortField(field);
  }, []);

  const filteredAndSortedStocks = useMemo(() => {
    let result = [...stocks];

    // Apply search filter
    if (searchTerm.trim()) {
      result = result.filter((stock) =>
        stock.companyShortName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply current price filter
    if (filters.minCurrent > 0) {
      result = result.filter(
        (stock) => parseFloatSafe(stock.current) >= filters.minCurrent
      );
    }

    // Apply percentage change filter
    if (filters.minPercentageChange > 0) {
      result = result.filter(
        (stock) =>
          parseFloatSafe(stock.percentagechange) >= filters.minPercentageChange
      );
    }

    // Apply sorting
    if (sortField) {
      result.sort((a, b) => {
        const aValue = parseFloatSafe(a[sortField]);
        const bValue = parseFloatSafe(b[sortField]);
        return aValue - bValue;
      });
    }

    return result;
  }, [stocks, searchTerm, filters, sortField]);

  return (
    <section className={styles.dashboardContainer}>
      <div className={styles.stickyHeader}>
        {/* Controls Header */}
        <ControlsHeader
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          filters={filters}
          onFilterChange={handleFilterChange}
          sortField={sortField}
          onSortChange={handleSortChange}
        />
      </div>

      {/* Stock Results*/}
      <StockList
        stocks={filteredAndSortedStocks}
        loading={loading}
        error={error}
      />
    </section>
  );
};

export default StockDashboard;
