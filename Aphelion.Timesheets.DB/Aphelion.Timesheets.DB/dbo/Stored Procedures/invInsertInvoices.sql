
CREATE PROC [dbo].[invInsertInvoices] as


INSERT INTO [dbo].[Invoice]
           ([InvoiceSourceKey]
           ,[InvoiceDateID]
           ,[InvoiceDueDateID]
           ,[InvoiceAMPersonID]
           ,[InvoiceClientID]
           ,[Comments]
		   ,InvoiceEmailAddress
           ,[InvoiceStatusID]
)

SELECT * FROM (
SELECT  ddMonth.BillingPeriodText + ' for '  + C.ClientSourceKey SourceKey,
 max(dd.DateID) as DateID
,max(ddMonth.DateID) as DueDateID
, COALESCE(P.AccountManagerPersonID, c.AccountManagerPersonID,1) AccountManagerPersonID
, c.ClientID
, ddMonth.BillingPeriodText + ' for '  + C.ClientSourceKey Comments
,COALESCE(C.InvoiceEmailAddress, P.InvoiceEmailAddress, 'sales@aphelion.bi') InvoiceEmailAddress
, 0 InvoiceStatus

FROM dbo.TimesheetDetail TD

inner join dbo.Project P
ON TD.TimesheetDetailProjectID = P.ProjectID
and not p.Billable = 0
inner join dbo.Client c
on P.ClientID = c.ClientID 
and p.Billable = 1
inner join cube.DimDate dd
on td.TimesheetDetailDateID = dd.DateID
and dd.DateID > 20130801

inner join cube.DimDate ddMonth
on dd.BillingPeriodText = ddMonth.BillingPeriodText
and dd.BillingYear = ddMonth.BillingYear
--and DATEDIFF(m, ddMonth.Date , cast(getdate() as date)) <= 2
--and ddMonth.BillingYear = 2012
--and ddMonth.MonthNumber <= 11
WHERE td.Billable = 1
GROUP BY ddMonth.BillingYear, ddMonth.BillingPeriodText
,c.ClientName
,c.ClientID
, P.AccountManagerPersonID
,c.AccountManagerPersonID
,c.ClientSourceKey
,COALESCE(C.InvoiceEmailAddress, P.InvoiceEmailAddress, 'sales@aphelion.bi')
) Inv
WHERE NOT EXISTS (SELECT 1 FROM dbo.Invoice 
	WHERE InvoiceDueDateID = INV.DueDateID
	and InvoiceClientID = INV.ClientID)
ORDER BY DateID, SourceKey
GO


