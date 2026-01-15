import React, { useState, useEffect, useMemo } from "react";
import TitleSection from "./components/TitleSection";
import ControlsHeader from "./components/ControlsHeader";
import StockList from "./components/StockList";
import { Stock, FilterOptions, SortField } from "./types/Stock";
import { fetchStocks } from "./services/stockService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FC = () => {
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
        (stock) => parseFloat(stock.current) >= filters.minCurrent
      );
    }

    // Apply percentage change filter
    if (filters.minPercentageChange > 0) {
      result = result.filter(
        (stock) =>
          parseFloat(stock.percentagechange) >= filters.minPercentageChange
      );
    }

    // Apply sorting
    if (sortField) {
      result.sort((a, b) => {
        const aValue = parseFloat(a[sortField]);
        const bValue = parseFloat(b[sortField]);
        return aValue - bValue;
      });
    }

    return result;
  }, [stocks, searchTerm, filters, sortField]);

  return (
    <div className="app-container">
      {/* Sticky Header */}
      <div className="sticky-header">
        {/* Title Section */}
        <TitleSection />
        {/* Controls Header */}
        <ControlsHeader
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filters={filters}
          onFilterChange={setFilters}
          sortField={sortField}
          onSortChange={setSortField}
        />
      </div>

      {/* Stock Results*/}
      <StockList
        stocks={filteredAndSortedStocks}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default App;
