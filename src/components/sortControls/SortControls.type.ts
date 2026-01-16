import { SortField } from "../../types/Stock";

export interface SortControlsProps {
  sortField: SortField;
  onSortChange: (field: SortField) => void;
}
