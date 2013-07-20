ALTER TABLE dbo.DimDate
ADD [ContractorYear] [int] NULL,
	[ContractorMonth] [int] NULL,
	[ContractorPeriod] [varchar](11) NULL,
	[BillingYear] [varchar](4) NULL,
	[WeekEndingBillingPeriod] [varchar](20) NULL,
	[BillingPeriodText] [varchar](9) NULL,
	[BillingPeriod] [int] NULL,
	[WeekEnding] [datetime] NULL,
	[WeekEndingText] [varchar](10) NULL;
GO