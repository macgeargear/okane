This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### TODO

### For each stock summaary page

- [ ] get income-statement
- [ ] get balance-sheet-statement
- [ ] get cash-flow-statement
- [ ] get financial-ratio
- [ ] get key-metrics
- [x] get company profile

**Financial Statement**

- [ ] /income
- [ ] /statement
- [ ] /balance-sheet
- [ ] /cash-flow

**Ratio**

```
{
    "symbol": "AAPL",
	"date": "2023-07-01",
	"calendarYear": "2023",
	"period": "Q3",
	"currentRatio": 0.9815625425125837,
	"quickRatio": 0.8135848211070477,
	"cashRatio": 0.22733129006185832,
	"daysOfSalesOutstanding": 174.85836888883458,
	"daysOfInventoryOutstanding": 14.57760444209413,
	"operatingCycle": 57.69336663386155,
	"daysOfPayablesOutstanding": 92.60774722369116,
	"cashConversionCycle": -34.91438058982961,
	"grossProfitMargin": 0.44516302553883397,
	"operatingProfitMargin": 0.2811594557257601,
	"pretaxProfitMargin": 0.2779197281073878,
	"netProfitMargin": 0.24305292370135825,
	"effectiveTaxRate": 0.12545638499098227,
	"returnOnAssets": 0.059339537604689616,
	"returnOnEquity": 0.32984371370740284,
	"returnOnCapitalEmployed": 0.10947518743305962,
	"netIncomePerEBT": 0.8745436150090178,
	"ebtPerEbit": 0.9884772588920776,
	"ebitPerRevenue": 0.2811594557257601,
	"debtRatio": 0.32617195661387666,
	"debtEquityRatio": 1.8130537213392175,
	"longTermDebtToCapitalization": 0.6193501531466102,
	"totalDebtToCapitalization": 0.6445144319803721,
	"interestCoverage": 23.044088176352705,
	"cashFlowToDebtRatio": 0.24139824304538798,
	"companyEquityMultiplier": 5.558582473371603,
	"receivablesTurnover": 2.0874036645740826,
	"payablesTurnover": 0.9718409387781323,
	"inventoryTurnover": 6.173853897428922,
	"fixedAssetTurnover": 1.878231917336395,
	"assetTurnover": 0.24414245548266167,
	"operatingCashFlowPerShare": 1.6805101718006317,
	"freeCashFlowPerShare": 1.5471778067673214,
	"cashPerShare": 3.980350134740222,
	"payoutRatio": 0.19360193149237967,
	"operatingCashFlowSalesRatio": 0.3225057153685343,
	"freeCashFlowOperatingCashFlowRatio": 0.9206595905989385,
	"cashFlowCoverageRatios": 0.24139824304538798,
	"shortTermCoverageRatios": 2.3534659648496743,
	"capitalExpenditureCoverageRatio": -12.603917821309127,
	"dividendPaidAndCapexCoverageRatio": 15.022779043280183,
	"dividendPayoutRatio": 0.19360193149237964,
	"priceBookValueRatio": 50.517075149815845,
	"priceToBookRatio": 50.517075149815845,
	"priceToSalesRatio": 37.224668234531826,
	"priceEarningsRatio": 38.28864478119813,
	"priceToFreeCashFlowsRatio": 125.37020577181208,
	"priceToOperatingCashFlowsRatio": 115.4232823191812,
	"priceCashFlowRatio": 115.4232823191812,
	"priceEarningsToGrowthRatio": -2.2531394813551207,
	"priceSalesRatio": 37.224668234531826,
	"dividendYield": 0.0012640949594764,
	"enterpriseValueMultiple": 135.9134788929472,
	"priceFairValue": 50.517075149815845
}
```
