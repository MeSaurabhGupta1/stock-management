import { FilterOptions, SortField } from "../../types/Stock";

export interface ControlsHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  sortField: SortField;
  onSortChange: (field: SortField) => void;
}
