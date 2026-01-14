export interface Stock {
  bestSellPrice: string;
  openPrice: string;
  eventCount: number;
  prevFiftyTwoWeekHighDateTime: string;
  bestBuyQty: number;
  absChange: string;
  companyShortName: string;
  companyName2: string;
  sparklineURL: string;
  exchangeID: string;
  compIdForValidation: string;
  companyid: string;
  current: string;
  high: string;
  prevFiftyTwoWeekLowDateTime: string;
  fiftyTwoWeekHighPrice: string;
  comparedPrice: string;
  low: string;
  segment: string;
  scripCode: string;
  prevFiftyTwoWeekHighPrice: string;
  volumeInThousand: string;
  value: string;
  nsescripcode: string;
  marketCap: string;
  ticker: string;
  sectorId: string;
  percentChange: string;
  prevFiftyTwoWeekLowPrice: string;
  sectorName: string;
  percentagechange: string;
  bestSellQty: number;
  volume: number;
  bargraphvalue: string;
  previousclose: string;
  asiancercticker: string;
  companyname: string;
  companytype: string;
  absolutechange: string;
  fiftyTwoWeekLowPrice: string;
  updateddatetime: string;
  listingExchange: string;
  seoname: string;
  bestBuyPrice: string;
  comparedPriceDate: string;
}

export interface ApiResponse {
  searchresult: Stock[];
}

export interface FilterOptions {
  minCurrent: number;
  minPercentageChange: number;
}

export type SortField = 'current' | 'absolutechange' | 'percentagechange' | '';
