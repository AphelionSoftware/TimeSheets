CREATE VIEW [dbo].[ChangedLast15MinutesTimesheetsBillingPeriodPerProject]
as


SELECT  top 10000000 ddMonth.BillingPeriodText,
c.ClientName
,p.ProjectName

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
WHERE  --(DATEDIFF(mi, TD.LastUpdateDate, getdate() ) < 1440)

(TD.LastUpdateDate >=  ISNULL((SELECT MAX(loadtimes.ExportClientTime) from config.LoadTimes), '2013/04/01'))
GROUP BY ddMonth.BillingYear, ddMonth.BillingPeriodText,c.ClientName,p.ProjectName
order by BillingPeriodText, ProjectName