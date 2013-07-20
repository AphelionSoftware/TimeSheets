


UPDATE t2
SET 
	t2.ContractorYear = t1.ContractorYear,
	t2.ContractorMonth = t1.ContractorMonth,
	t2.ContractorPeriod = t1.ContractorPeriod,
	t2.[BillingYear] = t1.billingperiod,
	t2.[WeekEndingBillingPeriod] = t2.WeekEndingBillingPeriod,
	t2.billingperiodText = t2.billingperiodtext,
	t2.[BillingPeriod] = t1.BillingPeriod,
	t2.[WeekEnding] = t1.WeekEnding,
	t2.[WeekEndingText] = t1.WeekEndingText
	 
FROM CUBE.DimDate as t1
INNER JOIN dbo.DimDate as t2 ON
	t1.DateID = t2.DateID

	