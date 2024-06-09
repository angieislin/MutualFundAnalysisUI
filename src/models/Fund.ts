export interface FundInfo {
  id: string;
  name: string;
  code: string;
}
export interface AssetValueDetail {
  date: string;
  value: number;
}
export interface StockHoldingDetail {
  stockName: string;
  percent: string;
  quoteChange: string;
}

export interface FundDetail {
  name: string;
  code: string;
  type: string;
  manager: string;
  establishDate: string;
  latestNetAssetValue: number;
  lastOneMonthReturn: string;
  lastThreeMonthReturn: string;
  lastSixMonthReturn: string;
  lastOneYearReturn: string;
  lastThreeYearReturn: string;
  sinceEstablishmentReturn: string;
  netAssetValues: AssetValueDetail[];
  stockHoldings: StockHoldingDetail[];
}