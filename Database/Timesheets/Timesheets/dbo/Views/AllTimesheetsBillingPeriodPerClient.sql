



CREATE VIEW [dbo].[AllTimesheetsBillingPeriodPerClient]
as


SELECT  ddMonth.BillingPeriodText,
c.ClientName

FROM dbo.TimesheetDetail TD

inner join dbo.Project P
ON TD.TimesheetDetailProjectID = P.ProjectID
and not p.Billable = 0
inner join dbo.Client c
on P.ClientID = c.ClientID 
inner join cube.DimDate dd
on td.TimesheetDetailDateID = dd.DateID

inner join cube.DimDate ddMonth
on dd.BillingPeriodText = ddMonth.BillingPeriodText
and dd.BillingYear = ddMonth.BillingYear
and DATEDIFF(m, ddMonth.Date , cast(getdate() as date)) <= 2
--and ddMonth.BillingYear = 2012
--and ddMonth.MonthNumber <= 11
GROUP BY ddMonth.BillingYear, ddMonth.BillingPeriodText
,c.ClientName