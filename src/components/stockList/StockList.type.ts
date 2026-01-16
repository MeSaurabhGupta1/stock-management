import { Stock } from "../../types/Stock";

export interface StockListProps {
  stocks: Stock[];
  loading: boolean;
  error: string | null;
}
